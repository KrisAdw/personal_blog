const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
      <div className="my-5 h-[75vh] flex justify-between items-center">
        {/* Hero kiri */}
        <div className="w-full h-full flex flex-col justify-center px-8">
          <h1 className="text-3xl mb-4">Hi, I am Kris!</h1>
          <p className="mb-2">I am a programmer, designer, AI Engineer, and anything you can say about technology, that is ME!</p>
          <p>This is my personal blog where i put all my notes, article, news, etc.</p>
        </div>
        {/* Hero kanan */}
        <div className="w-full h-full">
          <p>ini bagian hero kanan</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
