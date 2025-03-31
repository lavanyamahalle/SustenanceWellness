import { Link } from "wouter";

export default function DietConsultationSection() {
  return (
    <section id="diet-consultation" className="relative py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/90 to-[#8B4513]/80"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6TTIwIDIwYzAgMi43NiAyLjI0IDUgNSA1czUtMi4yNCA1LTVjMC0yLjc2LTIuMjQtNS01LTVzLTUgMi4yNC01IDV6Ii8+PC9nPjwvc3ZnPg==')] bg-repeat animate-slide-pattern-reverse"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 text-white">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              <span className="relative inline-block z-10">
                Personalized Diet Consultation
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#D2B48C] transform -skew-x-12"></span>
              </span>
            </h2>
            
            <p className="text-lg mb-8 leading-relaxed">
              Achieve your health and wellness goals with customized nutrition plans designed specifically for your body type, lifestyle, and preferences by our expert nutritionist.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D2B48C]/30 flex items-center justify-center mr-4">
                  <i className="fas fa-utensils text-[#D2B48C]"></i>
                </div>
                <p className="font-medium">Personalized meal plans tailored to your needs</p>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D2B48C]/30 flex items-center justify-center mr-4">
                  <i className="fas fa-chart-line text-[#D2B48C]"></i>
                </div>
                <p className="font-medium">Continuous progress monitoring and adjustments</p>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D2B48C]/30 flex items-center justify-center mr-4">
                  <i className="fas fa-mobile-alt text-[#D2B48C]"></i>
                </div>
                <p className="font-medium">24/7 WhatsApp support for guidance and questions</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/pricing" className="inline-block bg-[#D2B48C] hover:bg-[#C0A080] text-black font-cta font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 no-hover-effect">
                View Diet Plans
              </Link>
              
              <a 
                href="https://wa.me/7264072630" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white hover:bg-gray-100 text-green-600 font-cta font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 no-hover-effect"
              >
                <i className="fab fa-whatsapp mr-2 text-lg"></i>
                Consult Now
              </a>
            </div>
          </div>
          
          <div className="md:w-5/12 relative">
            {/* Decorative food illustrations */}
            <div className="absolute -right-10 -top-10 w-28 h-28 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1hcHBsZSI+PHBhdGggZD0iTTEyIDJhMyAzIDAgMCAwLTMgM3YxYTMgMyAwIDAgMCAzIDMgMyAzIDAgMCAwIDMtM1Y1YTMgMyAwIDAgMC0zLTN6Ij48L3BhdGg+PHBhdGggZD0iTTE5IDEwdjJhNyA3IDAgMCAxLTcgNyA3IDcgMCAwIDEtNy03di0yYTMgMyAwIDAgMSAzLTNoOGEzIDMgMCAwIDEgMyAzeiI+PC9wYXRoPjwvc3ZnPg==')] bg-no-repeat opacity-25 animate-float"></div>
            
            <div className="relative">
              <div className="w-full h-[450px] bg-gradient-to-b from-white/20 to-white/5 rounded-xl overflow-hidden shadow-2xl border border-white/20">
                <div className="absolute inset-0 flex items-center justify-center flex-col space-y-6">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 rounded-full bg-[#D2B48C]/50 animate-pulse-slow"></div>
                    <div className="absolute inset-3 rounded-full bg-[#D2B48C]/70 animate-pulse-medium"></div>
                    <div className="absolute inset-6 rounded-full bg-[#D2B48C] animate-pulse-fast flex items-center justify-center">
                      <i className="fas fa-apple-alt text-white text-2xl"></i>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-white font-bold text-xl">Book Your Consultation</p>
                    <p className="text-gray-200">First step to a healthier you</p>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white font-bold text-xl">Diet Consultation</p>
                  <p className="text-gray-200">Personalized guidance from experts</p>
                </div>
              </div>
              
              {/* Food icon decoration */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jb2ZmZWUiPjxwYXRoIGQ9Ik0xOCA4aDEgYTQgNCAwIDAgMSAwIDggaC0xIj48L3BhdGg+PHBhdGggZD0iTTIgOGgxNnY5YTQgNCAwIDAgMS00IDRINmE0IDQgMCAwIDEtNC00VjhaIj48L3BhdGg+PGxpbmUgeDE9IjYiIHkxPSIxIiB4Mj0iNiIgeTI9IjQiPjwvbGluZT48bGluZSB4MT0iMTAiIHkxPSIxIiB4Mj0iMTAiIHkyPSI0Ij48L2xpbmU+PGxpbmUgeDE9IjE0IiB5MT0iMSIgeDI9IjE0IiB5Mj0iNCI+PC9saW5lPjwvc3ZnPg==')] bg-no-repeat opacity-40 animate-float-delayed"></div>
            </div>
            
            {/* Consultation badge */}
            <div className="absolute -left-10 top-10 transform -rotate-12 bg-[#D2B48C] text-black font-bold py-2 px-4 rounded-lg shadow-lg">
              Online & In-person
            </div>
          </div>
        </div>
        
        {/* Program highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
            <div className="w-12 h-12 bg-[#D2B48C]/20 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-weight text-[#D2B48C]"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Weight Management</h3>
            <p className="text-gray-100">Scientifically-backed programs for weight loss, gain, or maintenance based on your body type.</p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
            <div className="w-12 h-12 bg-[#D2B48C]/20 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-heartbeat text-[#D2B48C]"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Medical Nutrition</h3>
            <p className="text-gray-100">Specialized therapeutic diets for managing diabetes, thyroid disorders, PCOS, and other health conditions.</p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
            <div className="w-12 h-12 bg-[#D2B48C]/20 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-dumbbell text-[#D2B48C]"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sports Nutrition</h3>
            <p className="text-gray-100">Performance-enhancing nutrition plans for athletes and fitness enthusiasts to maximize results.</p>
          </div>
        </div>
      </div>
    </section>
  );
}