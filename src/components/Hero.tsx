import castella from "./../assets/castella.png";

export default function Hero() {
  return (
    <div className="flex flex-col  justify-center items-center min-h-screen">
        <img
          style={{ maxWidth: "20%", height: "auto" }}
          src={castella}
        />
      <h1 className="-mt-3 -mb-1 text-center bg-gradient-to-r from-amber-600 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
        Ca-Stella
      </h1>

      <h2 className="text-center">Computer Science & Data Science Student</h2>
      <div className="mt-1">
        <h3 className="text-center">Baking data into delightful insights</h3>
        <h3 className="text-center">Making tech as sweet as cake</h3>
      </div>
    </div>
  );
}
