import axios from "axios";

// Get data
export const fetchData = async (url) => {
  try {
    const response = await axios.get("");
    console.log(response);
  } catch (error) {
    console.error("Error on fetching data", error);
  }
};

// Post data
export const sendData = async (url, request) => {
  console.log(url);
  try {
    const response = await axios.post(url, request);
    console.log(response);
  } catch (error) {
    console.error("Error on sending data", error);
  }
};

// Update data
export const updateData = async (url) => {
  try {
    const response = await axios.put(url, updateData);
    console.log(response);
  } catch (error) {
    console.error("Error on Update data", error);
  }
};

// Delete data
export const deleteData = async (url) => {
  try {
    const response = await axios.delete(url);
    console.log(response);
  } catch (error) {
    console.error("Error on delete data", error);
  }
};
