"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        alert('Order placed successfully!');
        router.push('/');
    }
    return <div>
        <h1>Order Button</h1>
        <button onClick={handleClick}>Place order</button>
    </div>
}