const Resume = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-950 py-12">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Resume
        </h2>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
          <div className="text-center mt-4">
            <a
              href="/Resume/Chandan Jadhav Resume.pdf"
              download="Chandan_Jadhav_Full_Stack_Developer_Resume.pdf"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Download PDF
            </a>
          </div>

          <img
            src="/Resume/Chandan-Jadhav-Resume-a.jpg"
            alt="Resume"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
