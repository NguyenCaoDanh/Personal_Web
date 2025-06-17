import React, { useState, useEffect } from 'react';
import { CvApi } from '../api/Cv';
import { formCvApi, FormCvDTO } from '../api/FormCv';

type FileCvDTO = {
  idCv: number;
  tenCv: string;
  path: string;
  accountId: number;
};

export default function CvManager() {
  const [tab, setTab] = useState<'form' | 'file'>('form');
  const [fileCvs, setFileCvs] = useState<FileCvDTO[]>([]);
  const [formCvs, setFormCvs] = useState<FormCvDTO[]>([]);

 useEffect(() => {
  if (tab === 'form') {
    formCvApi
      .getAll(0, 6)
      .then((res) => {
        // Kiểm tra đúng cấu trúc dữ liệu trả về từ API của FormCV
        const content = res?.data?.content ?? [];
        setFormCvs(content);
      })
      .catch((err) => {
        console.error('Lỗi lấy FormCV:', err);
        setFormCvs([]); // Nếu có lỗi, setFormCvs là mảng rỗng
      });
  } else if (tab === 'file') {
    CvApi.getAll(0, 6)
      .then((res) => {
        // Kiểm tra đúng cấu trúc dữ liệu trả về từ API của Cv
        const content = res?.data?.data?.content ?? []; // Đảm bảo truy cập đúng `res.data.data.content`
        setFileCvs(content);
      })
      .catch((err) => {
        console.error('Lỗi lấy FileCV:', err);
        setFileCvs([]); // Nếu có lỗi, setFileCvs là mảng rỗng
      });
  }
}, [tab]); // Chạy lại khi `tab` thay đổi



  return (
    <div className="p-6 font-sans">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setTab('form')}
          className={`px-4 py-2 rounded ${
            tab === 'form' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          FormCV
        </button>
        <button
          onClick={() => setTab('file')}
          className={`px-4 py-2 rounded ${
            tab === 'file' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          FileCV
        </button>
      </div>

      {/* Form CV List */}
      {tab === 'form' && (
        <div>
          <h2 className="text-xl font-bold mb-4">Danh sách FormCV</h2>
          <table className="w-full border table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">ID Form</th>
                <th className="border px-4 py-2">Account ID</th>
                <th className="border px-4 py-2">Xem</th>
              </tr>
            </thead>
            <tbody>
              {formCvs.map((form) => (
                <tr key={form.id}>
                  <td className="border px-4 py-2">{form.id}</td>
                  <td className="border px-4 py-2">{form.accountId}</td>
                  <td className="border px-4 py-2">
                    <a
                      href={`http://localhost:5173/formCv/${form.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Xem CV
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* File CV List */}
      {tab === 'file' && (
        <div>
          <h2 className="text-xl font-bold mb-4">Danh sách FileCV</h2>
          <table className="w-full border table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">ID CV</th>
                <th className="border px-4 py-2">Account ID</th>
                <th className="border px-4 py-2">Xem</th>
              </tr>
            </thead>
            <tbody>
              {fileCvs.map((cv) => (
                <tr key={cv.idCv}>
                  <td className="border px-4 py-2">{cv.idCv}</td>
                  <td className="border px-4 py-2">{cv.accountId}</td>
                  <td className="border px-4 py-2">
                    <a
                      href={`http://localhost:5173/Cvfile/${cv.tenCv}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Xem CV
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
