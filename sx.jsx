// // // import React, { useState } from "react";
// // // import QRCode  from "qrcode.react";
// // // import { QrReader } from "react-qr-reader";

// // // const QRCodeComponent = () => {
// // //   const [inputText, setInputText] = useState("https://example.com"); // Default text for QR code
// // //   const [scannedData, setScannedData] = useState(""); // Scanned QR code data

// // //   return (
// // //     <div style={{ textAlign: "center", padding: "20px" }}>
// // //       <h2>QR Code Generator & Scanner</h2>

// // //       {/* QR Code Generator */}
// // //       <div>
// // //         <input
// // //           type="text"
// // //           value={inputText}
// // //           onChange={(e) => setInputText(e.target.value)}
// // //           placeholder="Enter text or URL"
// // //           style={{ padding: "10px", width: "80%" }}
// // //         />
// // //         <div style={{ margin: "20px" }}>
// // //           <QRCode value={inputText} size={256} />
// // //         </div>
// // //       </div>

// // //       <hr style={{ margin: "20px 0" }} />

// // //       {/* QR Code Scanner */}
// // //       <div>
// // //         <h3>Scan a QR Code</h3>
// // //         <QrReader

// // //         onScan={inputText}

// // //         //   onResult={(result, error) => {
// // //         //     if (result) {
// // //         //       setScannedData(result.text);
// // //         //     }
// // //         //     if (error) {
// // //         //       console.error(error);
// // //         //     }
// // //         //   }}
          
// // //         //   constraints={{ facingMode: "environment" }} // Use back camera
// // //         //   style={{ width: "100%" }}
          
// // //         />
// // //         <p><strong>Scanned Data:</strong> {inputText || "No QR code scanned yet"}</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default QRCodeComponent;

// // import QRCode from "qrcode.react";
// // import { QrReader } from "react-qr-reader";
// // import { Container,Card,Button,TextField,makeStyles } from "@mui/material";
// // import React from 'react'
// // import { useState,useEffect } from "react";

// // const sx = () => {

// //     const [itm,setitm]=useState([
// //         {
// //             id:0,
// //             name:"suleiman",
// //             amount:1000
// //         }
// //     ])

// //     const [text,settext]=useState('')

// //     // const qr=async()=>{
// //     //     try{

// //     //         // await QRCode.
// //     //     }catch(err){
// //     //         console.log(err.message)
// //     //     }
// //     // }

// //   return (
// //     <Container sx={{margin:"30px"}} >
// //         <Card sx={{padding:10}}>
// //             <TextField label="suleiman" onInput={(e)=>settext(e.target.value)} />

// //             <Button color="primary" variant="contained">Click</Button>
// //         </Card>
// //         <Card>
// //             <QRCode value={itm[0]} size={200}/>
// //             <br />
// //             <br />
// //             <QrReader 
            
// //             >
// //         </Card>
// //     </Container>
// //   )

// // }

// // export default sx
// import React, { useState, useRef } from "react";
// import QRCode  from "qrcode.react";
// import { QrReader } from "react-qr-reader";
// import jsQR from "jsqr";

// const QRCodeApp = () => {
//   const [object, setObject] = useState("Laptop");
//   const [quantity, setQuantity] = useState(1);
//   const [amount, setAmount] = useState(1000);
//   const [scannedData, setScannedData] = useState("");
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const qrRef = useRef();

  
//   // QR Code Data Format

//   const data={
//     object:"suleiman",
//     quantity:12,
//     amount:1000
//   }

//   const qrData =  data ;

//   // Function to download QR code as an image
//   const downloadQRCode = () => {
//     const canvas = qrRef.current.querySelector("canvas");
//     const url = canvas.toDataURL("image/png");
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "qrcode.png";
//     a.click();
//   };

//   // Function to scan QR code from uploaded image
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = async (e) => {
//       const img = new Image();
//       img.src = e.target.result;
//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         const ctx = canvas.getContext("2d");
//         ctx.drawImage(img, 0, 0, img.width, img.height);

//         const imageData = ctx.getImageData(0, 0, img.width, img.height);
//         const code = jsQR(imageData.data, img.width, img.height);

//         if (code) {
//           try {
//             const parsedData = JSON.parse(code.data);
//             setScannedData(
//               `Object: ${parsedData.object}, Quantity: ${parsedData.quantity}, Amount: $${parsedData.amount}`
//             );
//           } catch (error) {
//             setScannedData("Invalid QR code format.");
//           }
//         } else {
//           setScannedData("No QR code found in the image.");
//         }
//       };
//     };

//     reader.readAsDataURL(file);
//     setUploadedImage(URL.createObjectURL(file));
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h2>QR Code Generator & Scanner</h2>

//       {/* QR Code Generator */}
//       <div>
//         <h3>Create QR Code</h3>
//         <input
//           type="text"
//           value={object}
//           onChange={(e) => setObject(e.target.value)}
//           placeholder="Object Name"
//           style={{ padding: "5px", margin: "5px" }}
//         />
//         <input
//           type="number"
//           value={quantity}
//           onChange={(e) => setQuantity(e.target.value)}
//           placeholder="Quantity"
//           style={{ padding: "5px", margin: "5px" }}
//         />
//         <input
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           placeholder="Amount"
//           style={{ padding: "5px", margin: "5px" }}
//         />

//         <div ref={qrRef} style={{ margin: "20px" }}>
//           <QRCode value={qrData} size={256} />
//         </div>

//         <button onClick={downloadQRCode} style={{ padding: "10px", marginTop: "10px" }}>
//           Download QR Code
//         </button>
//       </div>

//       <hr style={{ margin: "20px 0" }} />
//       <div>
//         <h3>Upload QR Code Image</h3>
//         <input type="file" accept="image/*" onChange={handleImageUpload} />
//         {uploadedImage && <img src={uploadedImage} alt="Uploaded QR" style={{ width: "200px", marginTop: "10px" }} />}
//       </div>
//       {/* QR Code Scanner */}
//       <div>
//         <h3>Scan a QR Code</h3>
//         <QrReader
//           onResult={(result, error) => {
//             if (result) {
//                 console.log(result)
//               try {
//                 const parsedData = result.text;
//                 setScannedData(
//                   `Object: ${parsedData.object}, Quantity: ${parsedData.quantity}, Amount: $${parsedData.amount}`
//                 );
//               } catch (error) {
//                 setScannedData("Invalid QR code format.");
//               }
//             }
//           }}
//           constraints={{ facingMode: "environment" }}
//           style={{ width: "100%" }}
//         />
//       </div>

//       <hr />

//       {/* QR Code Scanner from Image Upload */}
    

//       <hr />

//       {/* Display Scanned Data */}
//       <div>
//         <h3>Scanned Data</h3>
//         <p>{scannedData || "No QR code scanned yet"}</p>
//       </div>
//     </div>
//   );
// };

// export default QRCodeApp;
// import React, { useState, useRef } from "react";
// import QRCode from "qrcode.react";
// import { QrReader } from "react-qr-reader";
// import jsQR from "jsqr";

// const QRCodeProductApp = () => {
//   const [products, setProducts] = useState([]); // Stores product list
//   const [name, setName] = useState(""); // Product name
//   const [quantity, setQuantity] = useState(1); // Product quantity
//   const [price, setPrice] = useState(0); // Product price
//   const [scannedData, setScannedData] = useState(""); // Stores scanned QR data
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const qrRef = useRef(); // Reference for downloading QR code

//   // Function to add a new product
//   const addProduct = () => {
//     if (!name || quantity <= 0 || price <= 0) {
//       alert("Please enter valid product details!");
//       return;
//     }

//     const newProduct = {
//       id: products.length + 1,
//       name,
//       quantity,
//       price,
//     };

//     setProducts([...products, newProduct]); // Update product list
//     setName("");
//     setQuantity(1);
//     setPrice(0);
//   };

//   // Function to download QR code
//   const downloadQRCode = (index) => {
//     const canvas = document.getElementById(`qr-${index}`);
//     const url = canvas.toDataURL("image/png");
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `product-${index + 1}.png`;
//     a.click();
//   };

//   // Function to scan QR code from uploaded image
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = async (e) => {
//       const img = new Image();
//       img.src = e.target.result;
//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         const ctx = canvas.getContext("2d");
//         ctx.drawImage(img, 0, 0, img.width, img.height);

//         const imageData = ctx.getImageData(0, 0, img.width, img.height);
//         const code = jsQR(imageData.data, img.width, img.height);

//         if (code) {
//           try {
//             const parsedData = JSON.parse(code.data);
//             setScannedData(
//               `Product: ${parsedData.name}, Quantity: ${parsedData.quantity}, Price: $${parsedData.price}`
//             );
//           } catch (error) {
//             setScannedData("Invalid QR code format.");
//           }
//         } else {
//           setScannedData("No QR code found in the image.");
//         }
//       };
//     };

//     reader.readAsDataURL(file);
//     setUploadedImage(URL.createObjectURL(file));
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>QR Code Product Manager</h1>

//       {/* Product Input Form */}
//       <div>
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={{ padding: "5px", margin: "5px" }}
//         />
//         <input
//           type="number"
//           placeholder="Quantity"
//           value={quantity}
//           onChange={(e) => setQuantity(Number(e.target.value))}
//           style={{ padding: "5px", margin: "5px" }}
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={price}
//           onChange={(e) => setPrice(Number(e.target.value))}
//           style={{ padding: "5px", margin: "5px" }}
//         />
//         <button onClick={addProduct} style={{ padding: "10px", margin: "10px" }}>
//           Add Product
//         </button>
//       </div>

//       <hr />

//       {/* Display Products with QR Codes */}
//       <h2>Products</h2>
//       {products.length === 0 ? <p>No products added yet.</p> : null}
//       <div>
//         {products.map((product, index) => {
//           const qrData = JSON.stringify(product);
//           return (
//             <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
//               <h3>{product.name}</h3>
//               <p>Quantity: {product.quantity}</p>
//               <p>Price: ${product.price}</p>
//               <div>
//                 <QRCode id={`qr-${index}`} value={qrData} size={150} />
//               </div>
//               <button onClick={() => downloadQRCode(index)} style={{ marginTop: "10px", padding: "5px" }}>
//                 Download QR Code
//               </button>
//             </div>
//           );
//         })}
//       </div>
//       <input type="file" accept="image/*" onChange={handleImageUpload} />

//       <hr />

//       {/* QR Code Scanner (Live Camera) */}
//       <h2>Scan a QR Code (Live Camera)</h2>
//       <QrReader
//         onResult={(result, error) => {
//           if (result) {
//             try {
//               const scannedProduct = JSON.parse(result.text);
//               setScannedData(
//                 `Product: ${scannedProduct.name}, Quantity: ${scannedProduct.quantity}, Price: $${scannedProduct.price}`
//               );
//             } catch (error) {
//               setScannedData("Invalid QR code format.");
//             }
//           }
//           if (error) {
//             console.error(error);
//           }
//         }}
//         constraints={{ facingMode: "environment" }} // Use back camera
//         style={{ width: "100%" }}
//       />
//       <p><strong>Scanned Data:</strong> {scannedData || "No QR code scanned yet"}</p>

//       <hr />

//       {/* QR Code Scanner from Image Upload */}
//       <h2>Upload QR Code Image</h2>
//       {/* {uploadedImage && ( */}
//         <img src={uploadedImage} alt="Uploaded QR" style={{ width: "200px", marginTop: "10px" }} />
//       {/* )} */}
//     </div>
//   );
// };

// export default QRCodeProductApp;



// import { QrReader } from "react-qr-reader";
// import QRCode from "qrcode.react";

// import React,{useState} from 'react'

// const sx = () => {

//     const [text,settext]=useState('')

//     return (

//         <div>

//         <QRCode value={text} />

//         <input type="text" name="" id="" onChange={(e)=>settext(e.target.value)} />

      
      

//         </div>

//     )
// }

// export default sx

// import React, { useEffect, useState } from 'react';
// import QrScanner from 'react-qr-scanner';
// import jsQR from 'jsqr';
// import QRCode from 'qrcode.react';

// const QRCodeScanner = () => {
//   const [scanResult, setScanResult] = useState(null);
//   const [error, setError] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null); // State for uploaded image preview
//   const [isCameraActive, setIsCameraActive] = useState(true); // State to toggle between camera and image upload
//   const [product,setproduct] =useState({
//     img:"",
//     name:"",
//     price:'',
//     quantity:''
//   })

//   const handle=(e)=>{

//     // console.log(e)
//     const {name,value,files}=e
    

//     setproduct(prev=>({
//       ...prev,[name]:value,img:URL.createObjectURL(files[0])
//     }))
//   }
//   const [container,setcontainer]=useState('')

//   useEffect(()=>{
//     if(product){

//       setcontainer(<QRCode value={product.img}/>)
//     }
        

//   },[product])
//   const handleScan = (data) => {
//     if (data) {
//       try {
//         // Parse the QR code data (assuming it's a JSON string)
//         const parsedData = JSON.parse(data.text);
//         setScanResult(parsedData);
//         setError(null); // Clear any previous errors
//       } catch (err) {
//         setError('Invalid QR code data. Expected a JSON object.');
//         setScanResult(null);
//       }
//     }
//   };

//   // Handle scanning errors
//   const handleError = (err) => {
//     setError('Failed to scan QR code. Please ensure your camera is accessible.');
//     console.error(err);
//   };

//   // Handle image upload
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const image = new Image();
//         image.src = e.target.result;
//         image.onload = () => {
//           setImagePreview(image.src); // Set image preview
//           decodeQRCodeFromImage(image); // Decode QR code from the image
//         };
//       };
//       reader.readAsDataURL(file);
//     }
//   };


//   // Decode QR code from the uploaded image
//   const decodeQRCodeFromImage = (image) => {
//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');
//     canvas.width = image.width;
//     canvas.height = image.height;
//     ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
//     const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     const code = jsQR(imageData.data, imageData.width, imageData.height);

//     if (code) {
//       try {
//         const parsedData = JSON.parse(code.data);
//         setScanResult(parsedData);
//         setError(null);
//       } catch (err) {
//         setError('Invalid QR code data. Expected a JSON object.');
//         setScanResult(null);
//       }
//     } else {
//       setError('No QR code found in the uploaded image.');
//       setScanResult(null);
//     }
//   };

//   // Toggle between camera and image upload
//   const toggleMode = () => {
//     setIsCameraActive(!isCameraActive);
//     setScanResult(null); // Clear previous results
//     setError(null); // Clear previous errors
//     setImagePreview(null); // Clear image preview
//   };

//   return (
//     <div style={{ textAlign: 'center', padding: '20px' }}>
//       <h1>QR Code Scanner</h1>
      
//     {container}
//       {/* Toggle between camera and image upload */}
//       <button onClick={toggleMode} style={{ marginBottom: '20px' }}>
//         {isCameraActive ? 'Switch to Image Upload' : 'Switch to Camera'}
//       </button>

      

//       {/* Camera Mode */}
//       {isCameraActive && (
//         <QrScanner
//           delay={300}
//           onError={handleError}
//           onScan={handleScan}
//           style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}
//         />
//       )}
//     <input type="text" name='name' onChange={(e)=>handle(e.target)} />
//     <input type="text" name='name' onChange={(e)=>handle(e.target)} />
//     <input type="file" name='img'  onChange={(e)=>handle(e.target)} />

//       {/* Image Upload Mode */}
//       {!isCameraActive && (
//         <div>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             style={{ marginBottom: '20px' }}
//           />
//           {imagePreview && (
//             <div>
//               <h2>Uploaded Image:</h2>
//               <img
//                 src={imagePreview}
//                 alt="Uploaded QR Code"
//                 style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ccc' }}
//               />
//             </div>
//           )}
//         </div>
//       )}

//       {/* Display Scan Result */}
//       {scanResult && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Scanned QR Code Details:</h2>
//           <pre>{JSON.stringify(scanResult, null, 2)}</pre>
//         </div>
//       )}

//       {/* Display Errors */}
//       {error && (
//         <div style={{ marginTop: '20px', color: 'red' }}>
//           <h2>Error:</h2>
//           <p>{error}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QRCodeScanner;
import React, { useEffect, useRef, useState } from "react";
import QrScanner from "react-qr-scanner";
import jsQR from "jsqr";
import QRCode from "qrcode.react";

const QRCodeScanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(true);
  const [product, setProduct] = useState({
    img: "",
    name: "",
    price: "",
    quantity: "",
  });

  const [qrCode, setQrCode] = useState(null);
  const qrCodeRef = useRef(null); // Reference for QR code canvas

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    }));
  };

  useEffect(() => {
    if (product.name || product.price || product.quantity) {
      setQrCode(<QRCode ref={qrCodeRef} value={JSON.stringify(product)} size={200} />);
    }
  }, [product]);

  const handleScan = (data) => {
    if (data) {
      try {
        const parsedData = JSON.parse(data.text);
        setScanResult(parsedData);
        setError(null);
      } catch (err) {
        setError("Invalid QR code data. Expected a JSON object.");
        setScanResult(null);
      }
    }
  };

  const handleError = (err) => {
    setError("Failed to scan QR code. Please ensure your camera is accessible.");
    console.error(err);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = () => {
          setImagePreview(image.src);
          decodeQRCodeFromImage(image);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const decodeQRCodeFromImage = (image) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);

    if (code) {
      try {
        const parsedData = JSON.parse(code.data);
        setScanResult(parsedData);
        setError(null);
      } catch (err) {
        setError("Invalid QR code data. Expected a JSON object.");
        setScanResult(null);
      }
    } else {
      setError("No QR code found in the uploaded image.");
      setScanResult(null);
    }
  };

  const toggleMode = () => {
    setIsCameraActive(!isCameraActive);
    setScanResult(null);
    setError(null);
    setImagePreview(null);
  };

  // Function to download QR Code
  const downloadQRCode = () => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = url;
      link.download = "qrcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>QR Code Scanner</h1>

      {qrCode}

      <button onClick={toggleMode} style={{ marginBottom: "20px" }}>
        {isCameraActive ? "Switch to Image Upload" : "Switch to Camera"}
      </button>

      {isCameraActive && (
        <QrScanner
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}
        />
      )}

      <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
      <input type="text" name="price" placeholder="Price" onChange={handleInputChange} />
      <input type="text" name="quantity" placeholder="Quantity" onChange={handleInputChange} />
      <input type="file" name="img" onChange={handleInputChange} />

      {!isCameraActive && (
        <div>
          <input type="file" accept="image/*" onChange={handleImageUpload} style={{ marginBottom: "20px" }} />
          {imagePreview && (
            <div>
              <h2>Uploaded Image:</h2>
              <img src={imagePreview} alt="Uploaded QR Code" style={{ maxWidth: "100%", height: "auto", border: "1px solid #ccc" }} />
            </div>
          )}
        </div>
      )}

      {scanResult && (
        <div style={{ marginTop: "20px" }}>
          <h2>Scanned QR Code Details:</h2>
          {/* <pre>{JSON.stringify(scanResult, null, 2)}</pre> */}
          <h1>{scanResult.name}</h1>
          <h1>{scanResult.price}</h1>
          <h1>{scanResult.quantity}</h1>
          <img src={scanResult.img} alt="" width={200} />
        </div>
      )}

      {error && (
        <div style={{ marginTop: "20px", color: "red" }}>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      )}

      {/* Download QR Code Button */}
      {qrCode && (
        <button onClick={downloadQRCode} style={{ marginTop: "20px", padding: "10px", background: "green", color: "white", border: "none", cursor: "pointer" }}>
          Download QR Code
        </button>
      )}
    </div>
  );
};

export default QRCodeScanner;
