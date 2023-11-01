import { useEffect, useState } from "react";

const useCorce = () => {
const [corce, setcorce] = useState([])
const [loading, setLoading] = useState(true)

useEffect(()=>{
    fetch('http://localhost:5000/corce')
    .then(res => res.json())
    .then (data =>{
        setcorce(data);
        setLoading(false)
    })
},[])
    // const { data: corce = [], isLoading: loading, refetch } = useQuery({
    //     queryKey: ['corce'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/corce')
    //         return res.json()
    //     }
    // })
    return [corce, loading]
};

export default useCorce;