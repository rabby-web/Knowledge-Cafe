import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div className='bg-purple-200 text-purple-800  p-2 my-3 border border-purple-500 text-xl font-medium rounded-lg shadow'>
                <h3>Reading Time: {readingTime}</h3>
            </div>
            <div className='bg-slate-200 rounded-lg p-2 my-3 border border-slate-300'>
            <h2 className='text-xl font-bold'>Bookmarked Blog: {bookmarks.length} </h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;