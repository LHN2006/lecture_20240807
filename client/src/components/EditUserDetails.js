import React, {useEffect,useRef,useState,usetState} from 'react'
import Avatar from './Avatar'
import uploadFile from '../helpers/uploadFile'
import Divider from './Divider'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/userSlice'

const EditUserDetails = ({onClose,user}) => {
  const [data,setData] = useState({
    name: user?.user,
    profile_pic: user?.profile_pic
  })
  const uploadPhotoRef = useRef()
  const dispatch = useDispatch()

  useEffect(()=>{
    setData((preve)=>{
      return{
        ...preve,
        ...user
      }
    })
  },[user])

  const handleOnChange = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const {name,value} = e.target
    setData((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })
  }

  const handleOpenUploadPhoto = (e) =>{
    e.preventDefault()
    e.stopPropagation()
    uploadPhotoRef.current.click()
  }
  const handleUploadPhoto = async(e)=>{
    e.preventDefault()
    e.stopPropagation()    
    const file = e.target.files[0]
    const uploadPhoto = await uploadFile(file)
    setData((preve)=>{
      return{
        ...preve,
        profile_pic: uploadPhoto?.url
      }
    })
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    e.stopPropagation()
    try {
      const URL = `${process.env.REACT_APP_BACKEND_URL}/api/update-user`
      const response = await axios({
        method: 'post',
        url: URL,
        data: data,
        withCredentials: true
      })
      toast.success(response?.data?.message)
      if (response.data.success){
        dispatch(setUser(response.data.data))
        onClose()
      }
    } catch (error) {
      toast.error()
    }
  }

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-gray-700 bg-opacity-40 flex justify-center items-center z-10'>
      <div className='bg-white p-4 py-6 m-1 rounded w-full max-w-sm'>
        <h2 className='font-semibold'>프로필 수정</h2>
        <p className='text-sm'>성명과 프로필 사진을 변경할 수 있습니다.</p>
        <form className='grid gap-3 mt-3' onChange={handleSubmit}>
          <div className='flex flex-col gap-1'>
            <lable htmlFor='name'>성명 :</lable>
            <input
              type='text'
              name='name'
              id='name'
              value={data.name}
              onChange={handleOnChange}
              className='w-full py-1 px-2 focus:outline-primary border-0.5'
            />
          </div>
          <div>
            <div>사진 :</div>
            <div className='my-1 flex items-center gap-4'>
              <Avatar
                width={40}
                height={40}
                imageUrl={data?.profile_pic}
                name={data?.name}
              />
              <label htmlFor='profile_pic'>
                <button className='text-xs' onClick={handleOpenUploadPhoto}>사진을 변경하시려면, 이곳을 클릭하세요.</button>
                <input
                  type='file'
                  id='profile_pic'
                  className='hidden'
                  onChange={handleUploadPhoto}
                  ref={uploadPhotoRef}
                />
            </label>
            </div>
          </div>
          <Divider/>
          <div className='flex gap-2 w-fit ml-auto'>
            <button onClick={onClose} className='border-primary border text-primary px-4 py-1 rounded hover:bg-primary hover:text-white'>취소</button>
            <button onClick={handleSubmit} className='border-primary bg-primary text-white border px-4 py-1 rounded hover:bg-secondary'>저장</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditUserDetails