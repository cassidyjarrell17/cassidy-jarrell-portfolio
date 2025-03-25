export default function TerraMetricsIOTSystem() 
{
    return (
        <div>
            <h1 className="mb-6">TerraMetrics IOT System</h1>
            <div className="p-2"></div>
            <h4 className="!text-[#5F6F52]/85 font-semibold">Overview</h4> 
            <p className="text-gray-700">The TerraMetrics IOT sytem is a smart garden monitoring and analytics platform.
                It leverages IOT devices to collect data on soil moisture, temperature, and humidity and provides a responsive
                web interface for visualization and analysis.
            </p>

            <div className="mt-10">
                <h4 className="!text-[#5F6F52]/85 text-2xl !font-semibold">Tech Stack</h4>
                <ul className="!list-disc pl-5 space-y-2 text-lg text-gray-700 !marker:text-black">
                    <li>Hardware: Raspberry Pi, Arduino, various sensors</li>
                    <li>Frontend: Next.js, React, Typescript, Tailwind CSS</li>
                    <li>Backend: Node.js, Firebase</li>
                </ul>
            </div>
           
            <div className="mt-10">
            <h4 className="!text-[#5F6F52]/85 text-2xl !font-semibold">Features</h4>
                <ul className="!list-disc pl-5 space-y-2 text-lg text-gray-700 !marker:text-black">
                    <li>Real-Time Sensor Data - Collects and processes environmental metrics.</li>
                    <li>IOT Integration - Utilizes Raspberry Pi/Arduino to connect with multiple sensors.</li>
                    <li>Data Visualization Dashboard - Displays insights through interactive charts/tables.</li>
                    <li>Automated Alerts - Notifies users when metrics exceed predefined thresholds.</li>
                </ul>
            </div>
        </div>
    )
}