// src/02-api/http.js
import api from './axiosInstance';

/**
 * Generic GET request
 * @param {string} url - endpoint
 * @param {object} params - query params
 */
export const GET = async (url, params = {}) => {
  try {
    const response = await api.get(url, { params });
    return response.data;
  } catch (err) {
    handleError(err);
  }
};

/**
 * Generic POST request
 * @param {string} url - endpoint
 * @param {object} data - request body
 */
export const POST = async (url, data = {}) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (err) {
    handleError(err);
  }
};

/**
 * Generic PUT request
 * @param {string} url - endpoint
 * @param {object} data - request body
 */
export const PUT = async (url, data = {}) => {
  try {
    const response = await api.put(url, data);
    return response.data;
  } catch (err) {
    handleError(err);
  }
};

/**
 * Generic DELETE request
 * @param {string} url - endpoint
 */
export const DELETE = async (url) => {
  try {
    const response = await api.delete(url);
    return response.data;
  } catch (err) {
    handleError(err);
  }
};

/**
 * Centralized error handling
 * @param {object} err - Axios error object
 */
const handleError = (err) => {
  // Customize logging or error reporting
  console.error('HTTP Error:', err.response?.data || err.message);
  throw err; // rethrow so services/components can handle
};
