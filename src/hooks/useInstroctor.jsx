import { useQuery } from "@tanstack/react-query"

const useInstroctor = () => {
    const { data: instroctor = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['instroctor'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/instroctor')
            return res.json()
        }
    })
    return [instroctor, loading, refetch]
}

export default useInstroctor;