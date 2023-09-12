import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between bg-slate-100 py-4 px-8 border-b-2 items-center'>
            <h1 className='text-3xl md:text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;