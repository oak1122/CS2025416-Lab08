import React from "react";
import Link from "next/link";

export default function page(){
  return(
    <main className="flex flex-col items-center justify-center min-h-[70vh] p-8 text-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-lg w-full">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Lab 08</h1>
        <p className="text-gray-600 mb-4 font-medium">Deploy Full-Stack Web App บน Cloud VPS ด้วย Docker</p>
        <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-900 mb-6 text-left space-y-1">
          <p><strong>Database:</strong> MySQL (Docker)</p>
          <p><strong>Backend API:</strong> Express.js (Port 3001)</p>
          <p><strong>Frontend:</strong> Next.js + React (Port 3000)</p>
          <p><strong>Database GUI:</strong> phpMyAdmin (Port 8080)</p>
        </div>
        <Link
          href="/users"
          className="inline-block w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-200"
        >
          ไปยังหน้ารายการข้อมูลพนักงาน (Users) &rarr;
        </Link>
      </div>
    </main>
  );
}