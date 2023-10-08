import Button from "../components/Button"
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import {setAddress} from "../store/userInfo/addressSlice"



const AddressForm = ({onTabSwitch}) => {
    const dispatch = useDispatch()
    const {register, handleSubmit} =  useForm()

    const onSubmit = (data) =>{
        dispatch(setAddress(data))
        onTabSwitch("Payment")
    }

  return (
        <form className="md:w-2/3 md:mx-auto px-3 pt-1" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="pt-4 text-2xl md:text-center"> Address for the delivery</h3>
            <div className="mb-4">
            <label for="streetAddress" className="block mb-2 text-sm font-bold text-gray-700">Street Address</label>
            <input 
            {...register("streetAddress")}
            className="w-full p-3 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="streetAddress"
            type="text"
            placeholder="Street Address"
            />
            </div>
            <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label For="city" className="block mb-2 text-sm font-bold text-gray-700">City</label>
                    <input
                    {...register("city")}
                    type="text"
                    id="city"
                    placeholder="City"
                    className="w-full p-3 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label For="state" className="block mb-2 text-sm font-bold text-gray-700">State</label>
                    <input
                    {...register("state")}
                    type="text"
                    id="state"
                    placeholder="State"
                    className="w-full p-3 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    />
                </div>
            </div>
            <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label For="country" className="block mb-2 text-sm font-bold text-gray-700">Country</label>
                    <input
                    {...register("country")}
                    type="text"
                    id="country"
                    placeholder="Country"
                    className="w-full p-3 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label For="postalcode" className="block mb-2 text-sm font-bold text-gray-700">Postal Code</label>
                    <input
                    {...register("postalCode")}
                    type="text"
                    id="postalcode"
                    placeholder="Postal Code"
                    className="w-full p-3 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    />
                </div>
            </div>
            <div className="flex justify-end p-2">
                <Button variant="dark" className="flex items-center" type="submit"> <span className="mr-1">Next</span></Button>
            </div>
        </form>
  )
}

export default AddressForm