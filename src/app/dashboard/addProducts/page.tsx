"use client"
import React, { useState } from "react"
import { PackagePlus, Image as ImageIcon, X, Loader2 } from "lucide-react"
import axios from "axios"
 
const AddProduct = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Wallets", // Default category
    stock: "",
    isFeatured: false,
    images: [] as string[],
  })

  const [imageUrl, setImageUrl] = useState("")

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const addImage = () => {
    if (imageUrl) {
      setFormData((prev) => ({ ...prev, images: [...prev.images, imageUrl] }))
      setImageUrl("")
    }
  }

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      // Convert price and stock to numbers before sending to Prisma
      const payload = {
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
      }

      const res = await  axios.post("/product/create", payload)
      if (res.data.success) {
        alert("Product added successfully!")
        setFormData({
          name: "",
          description: "",
          price: "",
          category: "Wallets",
          stock: "",
          isFeatured: false,
          images: [],
        })
      }
    } catch (err) {
      console.error(err)
      alert("Failed to add product")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
          <PackagePlus size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">
          Add New Leather Product
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Name */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
              placeholder="e.g. Premium Leather Bi-fold Wallet"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              required
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
              placeholder="Describe the material, stitching, and features..."
            />
          </div>

          {/* Price & Stock */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price ($)
            </label>
            <input
              required
              name="price"
              value={formData.price}
              onChange={handleChange}
              type="number"
              step="0.01"
              className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stock Quantity
            </label>
            <input
              required
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              type="number"
              className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2.5 border rounded-lg bg-white outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="Wallets">Wallets</option>
              <option value="Belts">Belts</option>
              <option value="Bags">Bags</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          {/* Featured Toggle */}
          <div className="flex items-center gap-3 mt-8">
            <input
              type="checkbox"
              name="isFeatured"
              checked={formData.isFeatured}
              onChange={handleChange}
              className="w-5 h-5 accent-amber-500"
            />
            <label className="text-sm font-medium text-gray-700">
              Mark as Featured Product
            </label>
          </div>
        </div>

        {/* Image Upload UI */}
        <div className="border-t pt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Images
          </label>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="flex-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Paste image URL here..."
            />
            <button
              type="button"
              onClick={addImage}
              className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 flex items-center gap-2"
            >
              <ImageIcon size={18} /> Add
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {formData.images.map((url, index) => (
              <div key={index} className="relative group aspect-square">
                <img
                  src={url}
                  alt="preview"
                  className="w-full h-full object-cover rounded-lg border"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full bg-amber-500 text-white font-bold py-3 rounded-lg hover:bg-amber-600 transition-colors flex justify-center items-center gap-2"
        >
          {loading ? <Loader2 className="animate-spin" /> : "Save Product"}
        </button>
      </form>
    </div>
  )
}

export default AddProduct
