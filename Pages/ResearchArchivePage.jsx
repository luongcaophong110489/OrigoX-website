import React, { useState, useEffect } from 'react';
import { ArrowLeft } from '../components/icons'; // Giả sử icons được export từ một file index
import sanityClient from '../sanityClient'; // Import client đã cấu hình

const ResearchArchivePage = ({ onNavigate, title, subtitle }) => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Query đồng bộ với schema post.js
        const query = `*[_type == "post"]{
            _id,
            title,
            slug,
            publishedAt,
            excerpt,
            "authorName": author->name,
            "imageUrl": mainImage.asset->url
        } | order(publishedAt desc)`;

        sanityClient.fetch(query)
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch(console.error);
    }, []);

    if (loading) {
        return (
             <div className="bg-white">
                <div className="container mx-auto px-6 py-16 text-center">
                    <h1 className="text-2xl font-bold text-gray-700">Đang tải dữ liệu...</h1>
                </div>
            </div>
        );
    }
    
    if (!posts || posts.length === 0) {
        return (
             <div className="bg-white">
                <div className="container mx-auto px-6 py-16 text-center">
                    <h1 className="text-2xl font-bold">Chưa có bài viết nào.</h1>
                     <p className="text-gray-600 mt-2">Hãy thử đăng bài viết đầu tiên của bạn trên Sanity Studio!</p>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white">
            <div className="container mx-auto px-6 py-16">
                <button onClick={() => onNavigate('researchHub')} className="flex items-center text-gray-600 hover:text-gray-900 mb-8 text-sm">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại Trung tâm Research
                </button>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{title || 'Lưu trữ Bản tin'}</h1>
                <p className="text-gray-600 mb-12">{subtitle || 'Tất cả các phân tích và nhận định đã được xuất bản.'}</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <button 
                            key={post._id} 
                            className="w-full text-left bg-white rounded-lg overflow-hidden border hover:shadow-xl transition-shadow duration-300"
                        >
                            <img src={post.imageUrl || 'https://placehold.co/600x400?text=No+Image'} alt={post.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-lg font-bold mb-3 h-14">{post.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                                <div className="text-xs text-gray-500">
                                    <span>{post.authorName || 'N/A'}</span> &bull; <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'N/A'}</span>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResearchArchivePage;
