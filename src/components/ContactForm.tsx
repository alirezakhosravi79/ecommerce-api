import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ساختار و اعتبارسنجی با Zod
const schema = z.object({
  name: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد"),
  email: z.string().email("ایمیل معتبر وارد کنید"),
  message: z.string().min(10, "پیام باید حداقل ۱۰ کاراکتر باشد"),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("اطلاعات فرم:", data);
    alert("پیام با موفقیت ارسال شد!");
    reset(); // پاک کردن فرم
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#1f1f1f] p-6 max-w-lg mx-auto mt-10 rounded-xl shadow-md border border-orange-500 text-white space-y-4"
    >
      <h2 className="text-2xl font-bold text-orange-400 text-center">CONTACT US</h2>

      <div>
        <label className="block mb-1">NAME</label>
        <input
          {...register("name")}
          className="w-full bg-black text-white border border-orange-400 rounded px-3 py-2"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1">EMAIL</label>
        <input
          {...register("email")}
          className="w-full bg-black text-white border border-orange-400 rounded px-3 py-2"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1">MESSAGE</label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full bg-black text-white border border-orange-400 rounded px-3 py-2"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 w-full py-2 rounded-md text-white"
      >
        SEND MESSAGE
      </button>
    </form>
  );
};

export default ContactForm;
