export default function PersonalPortfolioWebsite() 
{
    return (
        <div>
            <h1 className="mb-6">Personal Portfolio Website</h1>
            <div className="p-2"></div>
            <h4 className="!text-[#5F6F52]/85 font-semibold">Tech Stack</h4> 
            <p className="text-gray-700">Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion.</p>

            <h4 className="!text-[#5F6F52]/85 font-semibold mt-4">Design Approach</h4>
            <p className="text-gray-700">Inspired by Apple's clean, responsive UI with smooth animations and intuitive navigation.</p>

            <div className="mt-10">
            <h4 className="!text-[#5F6F52]/85 text-2xl !font-semibold">Features</h4>
                <ul className="!list-disc pl-5 space-y-2 text-lg text-gray-700 !marker:text-black">
                    <li>Horizontal scrolling project section.</li>
                    <li>Custom modal system for detailed project views.</li>
                    <li>Framer Motion animations for dynamic interactions.</li>
                    <li>Responsive design with optimized layout across screen sizes.</li>
                </ul>
            </div>

            <div className="mt-10">
            <h4 className="!text-[#5F6F52]/85 text-2xl !font-semibold">Challenges & Solutions</h4>
                <ul className="!list-disc pl-5 space-y-2 text-lg text-gray-700">
                    <li>Making the horizontal scroll feel smooth and natural → Solved with snap-x snap-mandatory + scroll-smooth.</li>
                    <li>Keeping project cards consistent in size across breakpoints → Used min-w-[260px] max-w-[350px] with flex-shrink-0.</li>
                </ul>
            </div>
        </div>
    )
}