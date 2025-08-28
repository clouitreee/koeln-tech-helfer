async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus("sending");
  setError(null);

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      body: formData, // 👈 Mandamos FormData en lugar de JSON
    });

    if (!res.ok) {
      const txt = await res.text();
      throw new Error(txt || "Fehler beim Senden.");
    }

    setStatus("ok");
    form.reset();
  } catch (err: any) {
    setStatus("error");
    setError(err?.message || "Fehler beim Senden.");
  }
}

