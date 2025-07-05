export default function Footer() {
  return (
    <footer className="bg-white py-6 border-t">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <a href="#" aria-label="GitHub" className="hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.3c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.1-1.7-1.1-1.7-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8.1-.6.4-1.1.7-1.4-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 1.8-.4 2.8-.4s1.9.1 2.8.4c2.2-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.9 1.2 2 1.2 3.2 0 4.5-2.8 5.5-5.4 5.8.4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
        </div>
        <div>© 2024 PDF Annotator. All rights reserved.</div>
      </div>
    </footer>
  );
}
