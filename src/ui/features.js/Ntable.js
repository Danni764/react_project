// src/components/NoticeTable.jsx
import React from 'react';

const notices = [
  {
    id: 1,
    date: '2082-03-09',
    title: 'National TVET Curriculum Framework (NTCF) सम्बन्धी सूझाब उपलब्ध गराईदिने बारे। ',
   published: 'CTEVT Web Admin.',
    file:' https://ctevt.org.np/documents/2082-3-9-national-tvet-curriculum-framework-ntcf-b-ulb-ii-b'
  },
  {
    id: 2,
    date: '2082-02-23',
    title: 'Padpurti final result of notice 59-60',
    published: 'CTEVT Web Admin',
    file: 'https://ctevt.org.np/documents/2082-02-23-padpurti-final-result-of-notice-59-60'
  },
   {
    id: 3,
    date: '2082-02-22',
    title: 'पदपुर्ति समितीको विज्ञापन न. ५६-५८ को अन्तिम नतिजा प्रकाशन',
    published: 'CTEVT Web Admin',
    file: 'https://example.com/notice2.pdf'
  },
   {
    id: 4,
    date: '2082-02-21',
    title: 'पदपुर्ति सन्बन्धी सुचना ',
   published: 'CTEVT Web Admin',
    file: 'https://ctevt.org.np/documents/2082-2-21-b'
  },
   {
    id: 5,
    date: '2082-02-13',
    title: 'Notice for request letter',
   published: 'CTEVT Web Admin',
    file:' https://ctevt.org.np/documents/2082-02-13-notice-for-request-letter'
  },
   {
    id: 6,
    date: '2082-02-05',
    title: 'समकक्षता सम्बन्धी अत्यन्त जरुरी सुचना',
   published: 'CTEVT Web Admin',
    file:' https://ctevt.org.np/documents/2082-02-05-b-a'
  },
  


];

const Ntable = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Notice Board</h2>
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border">SN</th>
            <th className="py-2 px-4 border"> Published Date</th>
            <th className="py-2 px-4 border text-justify"> Notice Title</th>
            <th className="py-2 px-4 border">Published by</th>
            <th className="py-2 px-4 border">File</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice, index) => (
            <tr key={notice.id} className="text-center hover:bg-gray-50">
              <td className="py-2 px-4 border">{index + 1}</td>
              <td className="py-2 px-4 border">{notice.date}</td>
              <td className="py-2 px-4 border">{notice.title}</td>
              <td className="py-2 px-4 border">{notice.published}</td>
              <td className="py-2 px-4 border">
                <a href={notice.file} className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ntable
