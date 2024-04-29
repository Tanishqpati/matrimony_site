import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex bg-white h-screen justify-start items-center">
      <div className="hidden"></div>

      <div className="flex justify-between items-center w-full flex-col gap-5 p-5 relative h-full">
        <div className="flex flex-col w-full justify-center items-center gap-5 mt-8">
          <h2 className="text-center text-black font-black text-3xl">
            Login Account
          </h2>
          <p className="text-slate-400">
            Continue with phone number verification
          </p>
        </div>
        <Image src="/signup-page-gif.gif" width={500} height={300} alt="GIF" />
        <div className="flex gap-2 divide-x-4 text-slate-400 p-4 rounded-2xl border-2 border-slate-400 outline-none slate-500 w-full">
          <p className="text-lg">+91</p>
          <input
            type="number"
            placeholder="Phone number"
            className="h-full w-full outline-none pl-3 text-lg"
          />
        </div>

        <div className="flex flex-col w-full justify-center items-center gap-5">
          <p className="text-black text-center">
            Don't have an account?{" "}
            <span className="text-pink-400">
              <Link href="/signup">Signup</Link>
            </span>
          </p>
          <button className="bg-pink-400 p-4 rounded-2xl w-full text-lg">
            Get Verification Code
          </button>
        </div>
      </div>
    </div>
  );
}
