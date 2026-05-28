import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// ============================================================
// 🔑 EmailJS Configuration
// Replace these with your actual EmailJS credentials
// ============================================================
const EMAILJS_SERVICE_ID = 'service_naj52zm';
const EMAILJS_TEMPLATE_ID = 'template_74mbpcw';
const EMAILJS_PUBLIC_KEY = 'CmXNIlqBPkj3-P2md';

const Contact = () => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

        setStatus('sending');
        try {
            await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="pt-20 scroll-mt-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold flex justify-center items-center gap-3 text-textmain mb-4">
                        <span className="text-primary">05.</span> Get In Touch
                    </h2>
                    <p className="text-textmuted max-w-xl mx-auto">
                        Always open to discussing software quality, test automation, and new opportunities. Let's build bug-free software together!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Details */}
                    <div className="space-y-6">
                        <a href="mailto:oynndrilapurkayestha@gmail.com" className="flex items-center gap-4 p-5 glass-card hover:border-primary group">
                            <div className="w-12 h-12 rounded-lg bg-bordercol flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-textmain transition-colors">
                                <Mail size={20} />
                            </div>
                            <div>
                                <div className="text-xs font-medium text-textmuted uppercase tracking-wider mb-1">Email</div>
                                <div className="text-textmain font-medium">oynndrilapurkayestha@gmail.com</div>
                            </div>
                        </a>

                        <a href="tel:+8801753798664" className="flex items-center gap-4 p-5 glass-card hover:border-primary group">
                            <div className="w-12 h-12 rounded-lg bg-bordercol flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-textmain transition-colors">
                                <Phone size={20} />
                            </div>
                            <div>
                                <div className="text-xs font-medium text-textmuted uppercase tracking-wider mb-1">Phone</div>
                                <div className="text-textmain font-medium">+880 1753-798664</div>
                            </div>
                        </a>

                        <div className="flex gap-4 pt-4">
                            <a href="https://www.linkedin.com/in/oynndrila-singh-purkayestha/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-textmuted hover:text-textmain hover:border-primary transition-all">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="https://github.com/oynndri" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-textmuted hover:text-textmain hover:border-primary transition-all">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://sites.google.com/diu.edu.bd/oynndrilasinghpurkayestha" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-textmuted hover:text-textmain hover:border-primary transition-all">
                                <ExternalLink size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card p-8">
                        <h3 className="text-xl font-semibold text-textmain mb-6">Send Message</h3>
                        <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-textmuted mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-cardbg border border-bordercol rounded-lg px-4 py-3 text-textmain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-textmuted mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-cardbg border border-bordercol rounded-lg px-4 py-3 text-textmain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="Your email address"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-textmuted mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-cardbg border border-bordercol rounded-lg px-4 py-3 text-textmain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending' || status === 'success'}
                                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 focus:outline-none flex items-center justify-center gap-2.5 text-sm
                                    ${status === 'success'
                                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-lg shadow-emerald-500/10 cursor-default'
                                        : status === 'error'
                                            ? 'bg-red-500/20 text-red-400 border border-red-500/30 shadow-lg shadow-red-500/10'
                                            : status === 'sending'
                                                ? 'bg-primary/50 text-textmain cursor-wait shadow-lg shadow-primary/10'
                                                : 'bg-primary hover:bg-primaryDark text-textmain shadow-lg shadow-primary/20 hover:shadow-primary/30'
                                    }`}
                            >
                                {status === 'sending' && <><Loader2 size={18} className="animate-spin" /> Sending...</>}
                                {status === 'success' && <><CheckCircle size={18} /> Message Sent Successfully!</>}
                                {status === 'error' && <><AlertCircle size={18} /> Failed to Send — Try Again</>}
                                {status === 'idle' && <><Send size={16} /> Submit Message</>}
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
