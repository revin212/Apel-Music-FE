import axios from 'axios'; 

const useEmailConfirm = () => {
    const emailConfirm = async (url) => {
        try {
            await axios.get(url);
        } catch (err) {
            console.error(err)
        }
    }

    return { emailConfirm }
}

export default useEmailConfirm
