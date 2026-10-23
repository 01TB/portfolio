'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { person } from '@/content/site'
import type { Dictionary } from '@/content/types'

export default function ContactForm({ t }: { t: Dictionary['contact']['form'] }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  // Pas de back-end : on ouvre la messagerie du visiteur avec le message prérempli
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const body = `${t.bodyName} : ${form.name}\n${t.bodyEmail} : ${form.email}\n\n${form.message}`
    window.location.href = `mailto:${person.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8" aria-labelledby="contact-form-title">
      <h3 id="contact-form-title" className="text-xl font-semibold">
        {t.title}
      </h3>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
            {t.name} *
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" value={form.name} onChange={onChange} placeholder={t.namePlaceholder} className="input" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
            {t.email} *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={onChange} placeholder={t.emailPlaceholder} className="input" />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
          {t.subject} *
        </label>
        <input id="subject" name="subject" type="text" required value={form.subject} onChange={onChange} placeholder={t.subjectPlaceholder} className="input" />
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
          {t.message} *
        </label>
        <textarea id="message" name="message" required rows={5} value={form.message} onChange={onChange} placeholder={t.messagePlaceholder} className="input resize-y" />
      </div>
      <button type="submit" className="btn-primary mt-6 w-full">
        <Send className="h-4 w-4" aria-hidden="true" />
        {t.submit}
      </button>
      <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">{t.note}</p>
    </form>
  )
}
