import React from "react";
import { Link } from "react-router-dom";
import { PiUserCircle} from 'react-icons/pi'

const CheckEmailPage = () => {
    return(
        <div className="mt-5">
            <div className="bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto">
                <div className="w-fit mx-auto mb-2">
                    <PiUserCircle size={80}/>
                </div>
        <h3>채팅에 오신것을 한영합니다.</h3>
            <form className="grid gap-4 mt-3">
                <div className="flex flex-col gap-1">
                    <label htmlFor="email">카카오 계정 :</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="카카오 계정을 입력하세요."
                        className="bg-slate-100 px-2 py-1 focus:outline-primary"
                    />
                </div>
                <button className="bg-primary text-lg px-4 py-1 hover:bg-secondary mt-2 font-bold text-white leading-relaxed tracking-wide">
                    Let's Go
                    </button>
                    <p className="my-3 text-center">
                        계정이 없으십니까? 
                        <Link
                        to={'/register'}
                            className='hover:text-primary font-semiboid'>등록</Link>
                    </p>
                </form>
            </div>
        </div>

    )
}

export default CheckEmailPage