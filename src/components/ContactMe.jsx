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
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        {/* Code Editor Window */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20">
          {/* macOS Window Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="text-gray-400 text-sm font-mono flex items-center gap-2">
              <span className="text-blue-400">JS</span> contact.js
            </div>
          </div>

          {/* Editor Body */}
          <div className="bg-[#0f1115] p-6 font-mono text-sm grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Left Column: Code Display */}
            <div className="hidden md:block border-r border-gray-800 pr-6 select-none leading-relaxed">
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
            <div className="flex flex-col h-full min-h-[300px]">

              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-2">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">Terminal</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleReset}
                    className="p-1 hover:bg-gray-800 rounded transition-colors text-gray-500 hover:text-white group"
                    title="Reset Terminal"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-180 transition-transform duration-500">
                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                      <path d="M3 3v5h5" />
                    </svg>
                  </button>
                  {step === 0 && (
                    <span className="flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
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
                      className="group relative inline-flex items-center gap-2 px-8 py-3 bg-blue-600/10 text-blue-400 border border-blue-500/50 rounded-lg hover:bg-blue-600/20 transition-all duration-300 backdrop-blur-sm"
                    >
                      <span className="text-lg">▶</span>
                      <span className="font-bold tracking-wide">RUN SCRIPT</span>
                      <div className="absolute inset-0 rounded-lg bg-blue-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                )}

                {/* History of interaction */}
                {consoleOutput.map((line, index) => (
                  <div key={index} className={`${line.type === 'error' ? 'text-red-400' :
                    line.type === 'success' ? 'text-green-400' :
                      line.type === 'user' ? 'text-white ml-2 opacity-90' :
                        line.type === 'info' ? 'text-blue-300' :
                          'text-gray-400' // system
                    }`}>
                    {line.type === 'user' && <span className="text-blue-500 mr-2">➜</span>}
                    {line.text}
                  </div>
                ))}

                {/* Active Input Fields */}
                <div className="mt-2">
                  {step === 1 && (
                    <div className="animate-fade-in">
                      <div className="text-cyan-400 mb-1">? What is your name?</div>
                      <div className="flex items-center">
                        <span className="text-blue-500 mr-2">❯</span>
                        <input
                          ref={nameInputRef}
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onKeyDown={(e) => handleKeyDown(e, 'name')}
                          className="bg-transparent border-none outline-none text-white w-full font-mono placeholder-gray-700 caret-blue-500"
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
                        <span className="text-blue-500 mr-2">❯</span>
                        <input
                          ref={emailInputRef}
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onKeyDown={(e) => handleKeyDown(e, 'email')}
                          className="bg-transparent border-none outline-none text-white w-full font-mono placeholder-gray-700 caret-blue-500"
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
                        <span className="text-blue-500 mr-2 mt-1">❯</span>
                        <textarea
                          ref={messageInputRef}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onKeyDown={(e) => handleKeyDown(e, 'message')}
                          className="bg-transparent border-none outline-none text-white w-full font-mono placeholder-gray-700 resize-none h-24 caret-blue-500"
                          placeholder="Type message and press Enter to send..."
                        />
                      </div>
                      {errors.message && <div className="text-red-400 text-xs ml-6 mt-1">{errors.message}</div>}
                    </div>
                  )}

                  {step === 4 && (
                    <div className="flex items-center gap-2 text-blue-400 animate-pulse">
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
    </section>
  );
};

export default ContactMe;