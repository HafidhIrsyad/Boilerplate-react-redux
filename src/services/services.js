import axios from 'axios'

const BaseURL = 'http://localhost:8010/proxy';

export const getProduct = async (id) => {
  const response = await axios.get(`${BaseURL}/listProductBySellerId?seller_id=${id}`);
  return response?.data
}

export const addSeller = async (data) => {
  return await axios.post(`${BaseURL}/addSeller`, data);
}

export const addProduct = async (data) => {
  return await axios.post(`${BaseURL}/addProduct`, data)
}

export const searchProduct = async (nama) => {
  const response = await axios.get(`${BaseURL}/searchProductByKeyword?keyword=${nama}`);
  return response?.data
}