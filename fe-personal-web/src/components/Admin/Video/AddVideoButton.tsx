import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import ReactQuill from "react-quill";
import { FaPlusCircle } from "react-icons/fa";
import { getAllCategoryVideo } from "@/service/api/CategoryVideo";
import { createVideo } from "@/service/api/Video";

const AddVideoButton: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState("");
    const [categoriesVideo, setCategoriesVideo] = useState([]);
    const [mota, setMota] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchCategoriesVideo = async () => {
            try {
                const response = await getAllCategoryVideo();
                const options = response.data.data.map((cat: any) => ({
                    value: cat.idDanhMucVideo,
                    label: cat.tenDanhMuc
                }));
                setCategoriesVideo(options);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCategoriesVideo();
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
                setShowPopup(false);
            }
        };
        if (showPopup) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showPopup]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setFileName(file.name);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const videoDTO = {
            tenVideo: fileName,
            mota: mota,
            danhMucVideoId: selectedCategory?.value
        };
        const response = await createVideo(videoDTO, selectedFile);
        alert(response.message);
        setShowPopup(false);
        setMota("");
        setFileName("");
        setSelectedFile(null);
        window.location.reload();
    };

    return (
        <>
            <button
                onClick={() => setShowPopup(true)}
                className="flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md shadow transition duration-200"
            >
                <FaPlusCircle />
                <span>Thêm video</span>
            </button>

            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
                    <div
                        ref={popupRef}
                        className="bg-white rounded-2xl px-4 py-6 w-[90%] max-w-md max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in"
                    >
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 text-center">📝 Thêm Video</h3>

                        <form onSubmit={handleSubmit}>
                           
                            <div className="mb-6 mt-3">
                                <label className="block text-gray-700 font-medium mb-1">Danh mục video</label>
                                <Select
                                    value={selectedCategory}
                                    onChange={(option) => setSelectedCategory(option)}
                                    options={categoriesVideo}
                                    placeholder="Chọn danh mục..."
                                    className="react-select-container text-sm"
                                    classNamePrefix="react-select"
                                    isClearable
                                />
                            </div>
                            <div className="mb-12">
                                <label className="block text-gray-700 font-medium mb-1">Mô tả</label>
                                <ReactQuill
                                    value={mota}
                                    onChange={setMota}
                                    className="h-[100px] bg-white"
                                    placeholder="Nhập mô tả (nếu có)"
                                />
                            </div>

                            <div className="mb-4" style={{ marginTop:'12vh' }}>
                                <label className="block text-gray-700 font-medium mb-1">Chọn file video</label>
                                <input
                                    type="file"
                                    accept="video/*"
                                    onChange={handleFileChange}
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                                        file:rounded-lg file:border-0 file:text-sm file:font-semibold
                                        file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 transition"
                                />
                            </div>

                            <div className="flex justify-end gap-3 pt-2 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowPopup(false)}
                                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition"
                                >
                                    Hủy
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition font-semibold"
                                >
                                    Thêm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddVideoButton;
