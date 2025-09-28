import React from 'react';
import { AnimatedSection } from './helpers/AnimatedSection';

const LinkedInIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>);
const TwitterIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.586-4.938 6.141-4.422.223-8.34-2.333-10.963-5.554-.458.785-.719 1.696-.719 2.663 0 2.02.998 3.89 2.541 5.045-.93-.03-1.802-.286-2.566-.71v.054c0 2.82 2.003 5.22 4.653 5.753-.486.133-.996.204-1.524.204-.374 0-.737-.036-1.09-.104.743 2.305 2.898 3.985 5.465 4.032-1.992 1.562-4.506 2.492-7.24 2.492-.47 0-.936-.027-1.398-.082 2.578 1.655 5.632 2.62 8.943 2.62 10.706 0 16.576-8.875 16.576-16.576 0-.253 0-.505-.016-.755.454-.328.847-.738 1.162-1.205z"></path></svg>);

export const Footer = React.forwardRef((props, ref) => {
  return (
    <AnimatedSection id="footer" ref={ref} className="h-screen flex items-center justify-center bg-transparent">
        <div className="container mx-auto px-6 py-16">
            <div className="text-center pb-12 border-b border-surface/50">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-200">Ready to build the future?</h2>
                <p className="mt-4 text-slate-400 max-w-2xl mx-auto">Whether you're a student with a groundbreaking idea or an industry leader looking to collaborate, we want to hear from you.</p>
                <a href="mailto:contact@mic-mahe.com" className="mt-8 inline-block bg-primary text-white font-bold px-8 py-3 rounded-lg hover:bg-secondary transition-colors duration-300">Get in Touch</a>
            </div>
            <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-display font-bold text-slate-200">MIC.</h3>
                    <p className="text-sm text-slate-500">MAHE Innovation Centre, Bengaluru</p>
                </div>
                {/* Added new links for Privacy and Donate */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-slate-400">
                    <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="#donate" className="hover:text-primary transition-colors">Donate</a>
                    <div className="flex space-x-6">
                        <a href="#" className="text-slate-400 hover:text-primary transition-colors"><LinkedInIcon /></a>
                        <a href="#" className="text-slate-400 hover:text-primary transition-colors"><TwitterIcon /></a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-xs text-slate-600">
                <p>&copy; {new Date().getFullYear()} Manipal Academy of Higher Education. All Rights Reserved.</p>
            </div>
        </div>
    </AnimatedSection>
  );
});
