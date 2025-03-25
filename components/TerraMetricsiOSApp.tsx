export default function TerraMetricsiOS() 
{
    return (
        <div>
            <h1 className="mb-6">TerraMetrics iOS App</h1>
            <div className="p-2"></div>
            <h4 className="!text-[#5F6F52]/85 font-semibold">Overview</h4> 
            <p className="text-gray-700">The TerraMetrics iOS app is a user friendly mobile application designed to provide real-time data from the TerraMetrics IOT system.
                It allows users to monitor soil moisture, temperature, and humidity levels directly from their iOS devices.
                The app features a clean and intuitive interface, making it easy for users to access and analyze their garden data on the go.
            </p>

            <div className="mt-10">
                <h4 className="!text-[#5F6F52]/85 font-semibold">Tech Stack</h4> 
                <p className="text-gray-700">Swift/SwiftUI, CoreData, Push Notifications, Firebase.</p>
            </div>

            <div className="mt-10">
            <h4 className="!text-[#5F6F52]/85 text-2xl !font-semibold">Design Approach</h4>
                <ul className="!list-disc pl-5 space-y-2 text-lg text-gray-700 !marker:text-black">
                    <li>
                        Clean and intuitive UI - The app is designed to be user-friendly, with a focus on simplicity and ease of navigation.
                    </li>
                    <li>
                        Responsive layout - The app is optimized for various iOS devices, ensuring a consistent experience across different screen sizes.
                    </li>
                    <li>
                        Clear, real-time data presentation - The app displays real-time data from the TerraMetrics IOT system in a clear and visually appealing manner.
                    </li>
                </ul>
            </div>
           
            <div className="mt-10">
            <h4 className="!text-[#5F6F52]/85 text-2xl !font-semibold">Features</h4>
                <ul className="!list-disc pl-5 space-y-2 text-lg text-gray-700 !marker:text-black">
                    <li>Firebase Integration - The app retrieves real-time sensor data, such as soil moisture, temperature
                        and humidity levels, from the Firebase database.
                    </li>
                    <li>
                        Plant List View - Displays a list of plants with their respective data, allowing users to select and view details for each plant.
                    </li>
                    <li>
                        Plant Detail View - Provides detailed information about each plant, including soil moisture, temperature, and humidity levels.
                    </li>
                    <li>
                        Threshold-Based Alerts - Users can set thresholds for soil moisture, temperature, and humidity levels. The app sends push notifications when these thresholds are exceeded.
                    </li>
                </ul>
            </div>
        </div>
    )
}