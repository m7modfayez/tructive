import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Header";
import AdminNav from "../AdminNav";
import "./Massage.css";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";


interface Message {
  id: number;
  name: string;
  companyName: string;
  phone: string;
  email: string;
  message: string;
}

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("https://trucktive.runasp.net/api/ContactUs");
        setMessages(res.data);
        setLoading(false);
        
      } catch (err) {
        setError("Failed to load messages.");
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`https://trucktive.runasp.net/api/ContactUs/${id}`);
      setMessages(messages.filter((msg) => msg.id !== id));
      setTimeout(() => toast.success("Message deleted successfully."), 0 ); 
    } catch (err) {
      alert("Failed to delete message.");
      toast.error("there is error when deleting Message.")
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <>
      <Header role="Messages" />
      <div className="con" style={{ marginTop: "70px" }}>
        <div className="Massages">
          <table>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Company Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Message</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg.id}>
                  <td>{msg.id}</td>
                  <td>{msg.name}</td>
                  <td>{msg.companyName}</td>
                  <td>{msg.phone}</td>
                  <td>{msg.email}</td>
                  <td>{msg.message}</td>
                  <td>
                    <button onClick={() => handleDelete(msg.id)}>
                      <MdDelete color="red" size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AdminNav />
    </>
  );
};

export default Messages;
