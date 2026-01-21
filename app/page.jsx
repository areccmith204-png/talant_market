
import React, { useState } from "react";

export default function TalantMarket() { const [sales, setSales] = useState([]); const [form, setForm] = useState({ customer: "", product: "", price: "", months: 12, });

const addSale = () => { if (!form.customer  !form.product  !form.price) return; setSales([ ...sales, { ...form, monthly: Math.round(form.price / form.months), date: new Date().toLocaleDateString(), }, ]); setForm({ customer: "", product: "", price: "", months: 12 }); };

const totalToday = sales.reduce((s, x) => s + Number(x.price), 0);

return ( <div className="p-4 max-w-4xl mx-auto"> <h1 className="text-2xl font-bold mb-4">TALANT MARKET – Bepul CRM</h1>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="border p-3 rounded-2xl shadow">
      <h2 className="font-semibold mb-2">Yangi shartnoma</h2>
      <input className="border p-2 w-full mb-2" placeholder="Xaridor ismi"
        value={form.customer} onChange={e=>setForm({...form, customer:e.target.value})}/>
      <input className="border p-2 w-full mb-2" placeholder="Mahsulot"
        value={form.product} onChange={e=>setForm({...form, product:e.target.value})}/>
      <input className="border p-2 w-full mb-2" placeholder="Narx"
        type="number" value={form.price}
        onChange={e=>setForm({...form, price:e.target.value})}/>
      <select className="border p-2 w-full mb-2" value={form.months}
        onChange={e=>setForm({...form, months:e.target.value})}>
        <option value={3}>3 oy</option>
        <option value={6}>6 oy</option>
        <option value={9}>9 oy</option>
        <option value={12}>12 oy</option>
      </select>
      <button onClick={addSale} className="bg-black text-white px-4 py-2 rounded-xl">Saqlash</button>
    </div>

    <div className="border p-3 rounded-2xl shadow">
      <h2 className="font-semibold mb-2">Bugungi statistika</h2>
      <p>Shartnomalar soni: {sales.length}</p>
      <p>Bugungi tushum: {totalToday.toLocaleString()} so'm</p>
    </div>
  </div>

  <div className="mt-6">
    <h2 className="font-semibold mb-2">Shartnomalar ro'yxati</h2>
    <table className="w-full border">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-1">Xaridor</th>
          <th className="border p-1">Mahsulot</th>
          <th className="border p-1">Narx</th>
          <th className="border p-1">Oylik</th>
          <th className="border p-1">Sana</th>
        </tr>
      </thead>
      <tbody>
        {sales.map((s,i)=>(
          <tr key={i}>
            <td className="border p-1">{s.customer}</td>
            <td className="border p-1">{s.product}</td>
            <td className="border p-1">{Number(s.price).toLocaleString()}</td>
            <td className="border p-1">{s.monthly.toLocaleString()}</td>
            <td className="border p-1">{s.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
