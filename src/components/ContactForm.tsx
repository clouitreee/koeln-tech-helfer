import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  message: string;
};

export const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    reset();
    alert("Danke! Ihre Nachricht wurde gesendet.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block mb-2 font-medium text-foreground">Name *</label>
        <input
          {...register("name", { required: true })}
          className="w-full p-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Ihr Name"
        />
      </div>

      {/* Nachricht / Problem */}
      <div>
        <label className="block mb-2 font-medium text-foreground">
          Wobei darf ich Ihnen helfen? *
        </label>
        <textarea
          {...register("message", { required: true })}
          rows={4}
          className="w-full p-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Bitte beschreiben Sie Ihr Problem..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Absenden & Hilfe erhalten
      </button>
    </form>
  );
};
