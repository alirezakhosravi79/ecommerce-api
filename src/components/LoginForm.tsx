import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  username: z.string().min(3, "User name most more 3"),
  password: z.string().min(4, "pass more 4"),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
    const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
      login();
      navigate('/cart');
  };
  
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#1f1f1f] p-6 max-w-md mx-auto mt-10 rounded-xl shadow-md border border-orange-500 text-white space-y-4"
    >
      <h2 className="text-2xl font-bold text-orange-400 text-center">LOGIN</h2>

      <div>
        <label className="block mb-1">USER NAME</label>
        <input
          {...register("username")}
          className="w-full bg-black text-white border border-orange-400 rounded px-3 py-2"
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1">PASSWORD</label>
        <input
          type="password"
          {...register("password")}
          className="w-full bg-black text-white border border-orange-400 rounded px-3 py-2"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 w-full py-2 rounded-md text-white"
      >
        LOGIN
      </button>
    </form>
  );
};

export default LoginForm;
