import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(0); // 0: Idle, 1: Name, 2: Email, 3: Message, 4: Submitting, 5: Success
  const [consoleOutput, setConsoleOutput] = useState([]);

  // Refs for auto-focusing inputs
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom of terminal when output changes
    const terminal = document.getElementById('terminal-content');
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight;
    }

    // Auto-focus inputs based on step
    if (step === 1) setTimeout(() => nameInputRef.current?.focus(), 100);
    if (step === 2) setTimeout(() => emailInputRef.current?.focus(), 100);
    if (step === 3) setTimeout(() => messageInputRef.current?.focus(), 100);
  }, [step, consoleOutput]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear specific error when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleReset = () => {
    setStep(0);
    setFormData({ name: '', email: '', message: '' });
    setConsoleOutput([]);
    setErrors({});
  };

  const handleRunCode = () => {
    setStep(1);
    setConsoleOutput([
      { type: 'system', text: 'Starting node contact.js...' },
      { type: 'system', text: 'Initializing interactive session...' }
    ]);
  };

  const handleKeyDown = async (e, currentField) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();

      // Basic validation for current field
      if (currentField === 'name') {
        if (!formData.name.trim()) {
          setErrors({ ...errors, name: 'Name is required' });
          return;
        }
        setConsoleOutput(prev => [...prev, { type: 'user', text: formData.name }]);
        setStep(2);
      }
      else if (currentField === 'email') {
        if (!formData.email.trim()) {
          setErrors({ ...errors, email: 'Email is required' });
          return;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
          setErrors({ ...errors, email: 'Email is invalid' });
          return;
        }
        setConsoleOutput(prev => [...prev, { type: 'user', text: formData.email }]);
        setStep(3);
      }
      else if (currentField === 'message') {
        if (!formData.message.trim()) {
          setErrors({ ...errors, message: 'Message is required' });
          return;
        }
        setConsoleOutput(prev => [...prev, { type: 'user', text: formData.message }]);
        handleSubmit();
      }
    }
  };

  const handleSubmit = async () => {
    setStep(4);
    setConsoleOutput(prev => [...prev, { type: 'system', text: 'Sending data to server...' }]);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Your Name',
        },
        'YOUR_PUBLIC_KEY'
      );

      setStep(5);
      setConsoleOutput(prev => [
        ...prev,
        { type: 'success', text: '✓ Message sent successfully!' },
        { type: 'info', text: 'Process finished with exit code 0' }
      ]);

      // Reset after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setStep(0);
        setConsoleOutput([]);
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setConsoleOutput(prev => [...prev, { type: 'error', text: 'Error: Failed to send message.' }]);
      setStep(3); // Go back to message step to retry
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
            <div className="mb-6 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300 lg:justify-start">
              <span className="h-px w-10 bg-cyan-300/70" />
              <span>06 - Contact</span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-normal text-slate-100 sm:text-4xl lg:text-5xl xl:text-6xl">
              LET&apos;S <span className="text-cyan-400">BUILD</span>
              <br />
              SOMETHING GREAT
            </h2>

            <p className="mx-auto mt-8 max-w-md text-sm leading-7 text-slate-300 sm:text-base lg:mx-0">
              Whether it's a product idea, a technical challenge, or just a good conversation about building things - I'd love to hear from you.
            </p>
          </div>

          {/* Code Editor Window */}
          <div className="relative overflow-hidden rounded-lg border border-slate-700/30 bg-[#0b1220]/80 shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-sm">
          {/* macOS Window Header */}
          <div className="flex items-center justify-between border-b border-slate-700/30 bg-slate-950/50 px-4 py-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex items-center gap-2 font-mono text-sm text-slate-400">
              <span className="text-cyan-300">JS</span> contact.js
            </div>
          </div>

          {/* Editor Body */}
          <div className="grid grid-cols-1 gap-6 bg-[#050a12]/85 p-5 font-mono text-sm xl:grid-cols-[1.05fr_0.95fr]">

            {/* Left Column: Code Display */}
            <div className="hidden select-none border-r border-slate-700/30 pr-6 leading-relaxed xl:block">
              <div className="space-y-1 text-gray-400/80">
                <div className="flex"><span className="text-gray-700 w-6">1</span><span className="text-purple-400">const</span><span className="text-blue-300 ml-2">Contact</span> <span className="text-white">=</span> <span className="text-cyan-400">require</span>(<span className="text-green-400 text-opacity-80">'./ContactMe'</span>);</div>
                <div className="flex"><span className="text-gray-700 w-6">2</span></div>
                <div className="flex"><span className="text-gray-700 w-6">3</span><span className="text-purple-400">const</span> <span className="text-yellow-300">main</span> <span className="text-white">=</span> <span className="text-purple-400">async</span> () <span className="text-purple-400">=&gt;</span> {'{'}</div>
                <div className="flex"><span className="text-gray-700 w-6">4</span><span className="ml-4 text-gray-600">// Initialize contact session</span></div>
                <div className="flex"><span className="text-gray-700 w-6">5</span><span className="ml-4 text-purple-400">try</span> {'{'}</div>
                <div className="flex"><span className="text-gray-700 w-6">6</span><span className="ml-8 text-purple-400">await</span> <span className="text-blue-300">Contact</span>.<span className="text-cyan-400">connect</span>();</div>
                <div className="flex"><span className="text-gray-700 w-6">7</span></div>
                <div className="flex"><span className="text-gray-700 w-6">8</span><span className="ml-8 text-purple-400">const</span> <span className="text-orange-300">user</span> <span className="text-white">=</span> {'{'}</div>
                <div className="flex"><span className="text-gray-700 w-6">9</span><span className="ml-12 text-blue-300">name</span>: <span className="text-green-400 text-opacity-80">"{formData.name || '...'}"</span>,</div>
                <div className="flex"><span className="text-gray-700 w-6">10</span><span className="ml-12 text-blue-300">email</span>: <span className="text-green-400 text-opacity-80">"{formData.email || '...'}"</span>,</div>
                <div className="flex"><span className="text-gray-700 w-6">11</span><span className="ml-12 text-blue-300">msg</span>: <span className="text-green-400 text-opacity-80">"{formData.message ? formData.message.substring(0, 10) + '...' : '...'}"</span></div>
                <div className="flex"><span className="text-gray-700 w-6">12</span><span className="ml-8">{'}'};</span></div>
                <div className="flex"><span className="text-gray-700 w-6">13</span></div>
                <div className="flex"><span className="text-gray-700 w-6">14</span><span className="ml-8 text-purple-400">await</span> <span className="text-blue-300">Contact</span>.<span className="text-cyan-400">send</span>(<span className="text-orange-300">user</span>);</div>
                <div className="flex"><span className="text-gray-700 w-6">15</span><span className="ml-8 text-blue-300">console</span>.<span className="text-cyan-400">log</span>(<span className="text-green-400 text-opacity-80">'Sent!'</span>);</div>
                <div className="flex"><span className="text-gray-700 w-6">16</span><span className="ml-4">{'}'}</span> <span className="text-purple-400">catch</span> (<span className="text-orange-300">error</span>) {'{'}</div>
                <div className="flex"><span className="text-gray-700 w-6">17</span><span className="ml-8 text-blue-300">console</span>.<span className="text-cyan-400">error</span>(<span className="text-orange-300">error</span>);</div>
                <div className="flex"><span className="text-gray-700 w-6">18</span><span className="ml-4">{'}'}</span></div>
                <div className="flex"><span className="text-gray-700 w-6">19</span>{'}'};</div>
                <div className="flex"><span className="text-gray-700 w-6">20</span></div>
                <div className="flex"><span className="text-gray-700 w-6">21</span><span className="text-yellow-300">main</span>();</div>
              </div>
            </div>

            {/* Right Column: Terminal/Interactive Area */}
            <div className="flex h-full min-h-[320px] flex-col">

              {/* Terminal Header */}
              <div className="mb-4 flex items-center justify-between border-b border-slate-700/30 pb-2">
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">Terminal</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleReset}
                    className="group rounded p-1 text-slate-500 transition-colors hover:bg-slate-800/80 hover:text-cyan-300"
                    title="Reset Terminal"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-180 transition-transform duration-500">
                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                      <path d="M3 3v5h5" />
                    </svg>
                  </button>
                  {step === 0 && (
                    <span className="flex h-2 w-2">
                      <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
                    </span>
                  )}
                </div>
              </div>

              {/* Terminal Content */}
              <div id="terminal-content" className={`flex-1 font-mono text-sm space-y-2 custom-scrollbar ${step === 0 ? 'overflow-hidden' : 'overflow-y-auto'}`}>

                {/* Initial State - Run Button */}
                {step === 0 && (
                  <div className="h-full flex flex-col items-center justify-center space-y-4">
                    <div className="text-gray-500 text-center text-xs">Press button to execute</div>
                    <button
                      onClick={handleRunCode}
                      className="group relative inline-flex items-center gap-2 rounded-lg border border-cyan-400/35 bg-cyan-400/10 px-8 py-3 text-cyan-300 transition-all duration-300 hover:bg-cyan-400/15"
                    >
                      <span className="text-lg">▶</span>
                      <span className="font-bold tracking-wide">RUN SCRIPT</span>
                      <div className="absolute inset-0 rounded-lg bg-cyan-400/15 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></div>
                    </button>
                  </div>
                )}

                {/* History of interaction */}
                {consoleOutput.map((line, index) => (
                  <div key={index} className={`${line.type === 'error' ? 'text-red-400' :
                    line.type === 'success' ? 'text-green-400' :
                      line.type === 'user' ? 'text-white ml-2 opacity-90' :
                        line.type === 'info' ? 'text-cyan-300' :
                          'text-gray-400' // system
                    }`}>
                    {line.type === 'user' && <span className="mr-2 text-cyan-400">➜</span>}
                    {line.text}
                  </div>
                ))}

                {/* Active Input Fields */}
                <div className="mt-2">
                  {step === 1 && (
                    <div className="animate-fade-in">
                      <div className="text-cyan-400 mb-1">? What is your name?</div>
                      <div className="flex items-center">
                        <span className="mr-2 text-cyan-400">❯</span>
                        <input
                          ref={nameInputRef}
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onKeyDown={(e) => handleKeyDown(e, 'name')}
                          className="w-full border-none bg-transparent font-mono text-white outline-none caret-cyan-400 placeholder-gray-700"
                          placeholder="Type name and press Enter..."
                          autoComplete="off"
                        />
                      </div>
                      {errors.name && <div className="text-red-400 text-xs ml-6 mt-1">{errors.name}</div>}
                    </div>
                  )}

                  {step === 2 && (
                    <div className="animate-fade-in">
                      <div className="text-cyan-400 mb-1">? What is your email address?</div>
                      <div className="flex items-center">
                        <span className="mr-2 text-cyan-400">❯</span>
                        <input
                          ref={emailInputRef}
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onKeyDown={(e) => handleKeyDown(e, 'email')}
                          className="w-full border-none bg-transparent font-mono text-white outline-none caret-cyan-400 placeholder-gray-700"
                          placeholder="Type email and press Enter..."
                          autoComplete="off"
                        />
                      </div>
                      {errors.email && <div className="text-red-400 text-xs ml-6 mt-1">{errors.email}</div>}
                    </div>
                  )}

                  {step === 3 && (
                    <div className="animate-fade-in">
                      <div className="text-cyan-400 mb-1">? What is your message?</div>
                      <div className="flex items-start">
                        <span className="mr-2 mt-1 text-cyan-400">❯</span>
                        <textarea
                          ref={messageInputRef}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onKeyDown={(e) => handleKeyDown(e, 'message')}
                          className="h-24 w-full resize-none border-none bg-transparent font-mono text-white outline-none caret-cyan-400 placeholder-gray-700"
                          placeholder="Type message and press Enter to send..."
                        />
                      </div>
                      {errors.message && <div className="text-red-400 text-xs ml-6 mt-1">{errors.message}</div>}
                    </div>
                  )}

                  {step === 4 && (
                    <div className="flex animate-pulse items-center gap-2 text-cyan-300">
                      <span className="animate-spin">⟳</span> Processing request...
                    </div>
                  )}
                </div>

                {/* Blinking Cursor for idle effect at very end */}
                {step > 0 && step < 4 && (
                  <div className="h-4"></div>
                )}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
