import { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const INIT = { name: '', email: '', subject: '', message: '' };

function Field({ label, error, children }) {
  return (
    <div className={`form-field${error ? ' form-field--error' : ''}`}>
      <label className="form-field__label">{label}</label>
      {children}
      {error && <p className="form-field__error">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [form, setForm]     = useState(INIT);
  const [errors, setErrors] = useState({});
  const [sent, setSent]     = useState(false);

  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim())                  e.name    = 'Your name is required.';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Enter a valid email address.';
    if (!form.subject.trim())               e.subject = 'Please add a subject.';
    if (form.message.trim().length < 20)    e.message = 'Message must be at least 20 characters.';
    return e;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSent(true);
  };

  if (sent) {
    return (
      <main className="page contact-page">
        <div className="container">
          <div className="contact-success">
            <CheckCircle size={48} strokeWidth={1.5} className="contact-success__icon"/>
            <h2>Message sent!</h2>
            <p>Thanks for reaching out. We'll get back to you within 48 hours.</p>
            <button className="btn btn--rail" onClick={() => { setSent(false); setForm(INIT); }}>
              Send another message
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page contact-page">
      <div className="container contact-layout">

        {/* Left col */}
        <aside className="contact-info">
          <span className="badge badge--rail">Get in touch</span>
          <h1 className="section-title" style={{ marginTop: '.75rem' }}>
            We'd love to<br />hear from you.
          </h1>
          <p className="section-sub" style={{ marginBottom: '2.5rem' }}>
            Have a tip to share? Spot something outdated? Want to contribute to the project?
            Drop us a message.
          </p>

          <div className="contact-info__items">
            <div className="contact-info__item">
              <div className="contact-info__icon"><Mail size={18}/></div>
              <div>
                <p className="contact-info__label">Email</p>
                <p className="contact-info__val">hello@mumbailocal.guide</p>
              </div>
            </div>
            <div className="contact-info__item">
              <div className="contact-info__icon"><MessageSquare size={18}/></div>
              <div>
                <p className="contact-info__label">Response time</p>
                <p className="contact-info__val">Within 48 hours</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__row">
            <Field label="Your name" error={errors.name}>
              <input
                type="text" className="form-input" placeholder="e.g. Rohan Mehta"
                value={form.name} onChange={set('name')}
              />
            </Field>
            <Field label="Email address" error={errors.email}>
              <input
                type="email" className="form-input" placeholder="rohan@example.com"
                value={form.email} onChange={set('email')}
              />
            </Field>
          </div>
          <Field label="Subject" error={errors.subject}>
            <select className="form-input" value={form.subject} onChange={set('subject')}>
              <option value="">Select a subject</option>
              <option>Report incorrect information</option>
              <option>Suggest a new tip</option>
              <option>Partnership / collaboration</option>
              <option>General feedback</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Message" error={errors.message}>
            <textarea
              className="form-input form-textarea"
              placeholder="Tell us more... (min 20 characters)"
              rows={5}
              value={form.message}
              onChange={set('message')}
            />
          </Field>
          <button type="submit" className="btn btn--rail contact-form__submit">
            Send message <Send size={15}/>
          </button>
        </form>

      </div>
    </main>
  );
}
