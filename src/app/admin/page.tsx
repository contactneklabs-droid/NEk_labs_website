"use client";

import { useState, useEffect } from 'react';
import { Terminal, Image as ImageIcon, Trash2, CheckCircle2, Loader2, LogIn } from 'lucide-react';
import Image from 'next/image';

export default function AdminDashboard() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    handle: '',
    role: '',
    classType: '',
    system: '',
    profileImage: '',
    imageId: '',
  });

  useEffect(() => {
    // Check if auth is saved in session storage
    const savedPassword = sessionStorage.getItem('nek_admin_auth');
    if (savedPassword) {
      setPassword(savedPassword);
      setIsAuthenticated(true);
      fetchData(savedPassword);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchData = async (authPass: string) => {
    try {
      setLoading(true);
      const res = await fetch('/api/nekcard');
      const json = await res.json();
      if (json.data) {
        setFormData(json.data);
      }
    } catch (err) {
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    sessionStorage.setItem('nek_admin_auth', password);
    setIsAuthenticated(true);
    fetchData(password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSaving(true);
    setError('');

    // First delete old image if it exists
    if (formData.imageId) {
      const delData = new FormData();
      delData.append('action', 'delete_image');
      delData.append('public_id', formData.imageId);
      await fetch('/api/admin/nekcard', {
        method: 'POST',
        headers: { Authorization: `Bearer ${password}` },
        body: delData,
      });
    }

    const uploadData = new FormData();
    uploadData.append('action', 'upload_image');
    uploadData.append('image', file);

    try {
      const res = await fetch('/api/admin/nekcard', {
        method: 'POST',
        headers: { Authorization: `Bearer ${password}` },
        body: uploadData,
      });
      const json = await res.json();
      
      if (json.error) {
        setError(json.error);
        if (json.error === 'Unauthorized') setIsAuthenticated(false);
      } else {
        setFormData(prev => ({
          ...prev,
          profileImage: json.url,
          imageId: json.public_id,
        }));
      }
    } catch (err) {
      setError('Failed to upload image');
    } finally {
      setSaving(false);
    }
  };

  const handleSaveInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess('');

    const saveForm = new FormData();
    saveForm.append('action', 'update_info');
    Object.entries(formData).forEach(([key, value]) => {
      saveForm.append(key, value);
    });

    try {
      const res = await fetch('/api/admin/nekcard', {
        method: 'POST',
        headers: { Authorization: `Bearer ${password}` },
        body: saveForm,
      });
      const json = await res.json();
      
      if (json.error) {
        setError(json.error);
        if (json.error === 'Unauthorized') {
           setIsAuthenticated(false);
           sessionStorage.removeItem('nek_admin_auth');
        }
      } else {
        setSuccess('NEK Card updated successfully!');
        setTimeout(() => setSuccess(''), 3000);
      }
    } catch (err) {
      setError('Failed to save data');
    } finally {
      setSaving(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#111] border border-[#222] p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-6 border-b border-[#222] pb-4">
            <Terminal className="text-[#00ff9d]" />
            <h1 className="text-xl font-bold tracking-widest">NEK OS // ADMIN</h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">Access Key</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black border border-[#333] rounded px-4 py-3 text-white focus:outline-none focus:border-[#00ff9d] transition-colors font-mono"
                placeholder="Enter ADMIN_PASSWORD"
                required
              />
            </div>
            <button type="submit" className="w-full bg-[#00ff9d] text-black font-bold tracking-widest uppercase py-3 rounded flex items-center justify-center gap-2 hover:bg-[#00cc7d] transition-colors">
              <LogIn size={18} /> INITIALIZE SESSION
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (loading) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center"><Loader2 className="animate-spin text-[#00ff9d]" size={32} /></div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 font-mono">
      <div className="max-w-3xl mx-auto space-y-6">
        
        <div className="flex items-center justify-between border-b border-[#222] pb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-widest text-[#00ff9d] flex items-center gap-3">
              <Terminal /> NEK CARD CMS
            </h1>
            <p className="text-zinc-500 text-sm mt-2">Manage your public ID badge information</p>
          </div>
          <button 
            onClick={() => { sessionStorage.removeItem('nek_admin_auth'); setIsAuthenticated(false); }}
            className="text-xs text-zinc-500 hover:text-white border border-[#333] px-3 py-1.5 rounded uppercase tracking-wider"
          >
            Logout
          </button>
        </div>

        {error && <div className="bg-red-900/20 border border-red-500/50 text-red-400 p-4 rounded text-sm">{error}</div>}
        {success && <div className="bg-green-900/20 border border-green-500/50 text-green-400 p-4 rounded text-sm flex items-center gap-2"><CheckCircle2 size={16} /> {success}</div>}

        <div className="bg-[#111] border border-[#222] rounded-lg p-6">
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-6 border-b border-[#333] pb-2">Profile Image</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[#333] bg-black shrink-0">
              {formData.profileImage ? (
                <Image src={formData.profileImage} alt="Profile" fill className="object-cover grayscale" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-700">
                  <ImageIcon size={32} />
                </div>
              )}
            </div>
            
            <div className="flex-1 space-y-4 w-full">
              <label className="block w-full cursor-pointer bg-black border border-[#333] hover:border-[#00ff9d] transition-colors rounded p-4 text-center">
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                <span className="text-sm text-zinc-400 tracking-wider flex items-center justify-center gap-2">
                  {saving ? <Loader2 className="animate-spin" size={16}/> : <ImageIcon size={16} />}
                  {saving ? "UPLOADING TO CLOUDINARY..." : "SELECT NEW IMAGE"}
                </span>
              </label>
              <p className="text-xs text-zinc-600">Old images are automatically deleted from Cloudinary to save space.</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSaveInfo} className="bg-[#111] border border-[#222] rounded-lg p-6 space-y-6">
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-6 border-b border-[#333] pb-2">Identification Data</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">Display Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-black border border-[#333] rounded px-4 py-3 text-white focus:outline-none focus:border-[#00ff9d]" required />
            </div>
            <div>
              <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">Handle</label>
              <input type="text" name="handle" value={formData.handle} onChange={handleChange} className="w-full bg-black border border-[#333] rounded px-4 py-3 text-white focus:outline-none focus:border-[#00ff9d]" required />
            </div>
            <div>
              <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">Role</label>
              <input type="text" name="role" value={formData.role} onChange={handleChange} className="w-full bg-black border border-[#333] rounded px-4 py-3 text-white focus:outline-none focus:border-[#00ff9d]" required />
            </div>
            <div>
              <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">Class / Specialty</label>
              <input type="text" name="classType" value={formData.classType} onChange={handleChange} className="w-full bg-black border border-[#333] rounded px-4 py-3 text-white focus:outline-none focus:border-[#00ff9d]" required />
            </div>
          </div>

          <div>
            <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">System Bio</label>
            <textarea name="system" value={formData.system} onChange={handleChange} rows={3} className="w-full bg-black border border-[#333] rounded px-4 py-3 text-white focus:outline-none focus:border-[#00ff9d]" required />
          </div>

          <button type="submit" disabled={saving} className="w-full bg-[#00ff9d] text-black font-bold tracking-widest uppercase py-4 rounded flex items-center justify-center gap-2 hover:bg-[#00cc7d] transition-colors disabled:opacity-50">
            {saving ? <Loader2 className="animate-spin" size={18} /> : <CheckCircle2 size={18} />}
            SAVE CONFIGURATION
          </button>
        </form>
        
      </div>
    </div>
  );
}
