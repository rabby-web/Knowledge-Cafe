import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddToBookmarks,handleMarkAsRead}) => {
    console.log(blog)
    const {id,cover,title,author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='bg-white border border-gray-200 rounded-lg shadow mb-5 m-2'>
            <div>
            <img className='rounded-lg' src={cover} alt="" />
            <div className='flex justify-between items-center m-2'>
                <div className='flex justify-center items-center gap-3'>
                    <div>
                        <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex m-1 gap-2'>
                    <h4>{reading_time} min read</h4>
                    <button onClick={() => handleAddToBookmarks(blog)} className='text-xl'><FaBookmark className='text-fuchsia-800'></FaBookmark></button>
                </div>
            </div>
            <div>
                <h2 className='text-3xl m-2 font-bold'>{title}</h2>
                <p className='m-1'>
                    {
                        hashtags.map((hash,idx) => <span className='py-2 px-1' key={idx}><a href="#">{hash}</a></span>)
                    }
                </p>
            </div>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='m-2 text-purple-800 font-bold underline'>Mark As Read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;