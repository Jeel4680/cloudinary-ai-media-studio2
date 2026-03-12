import { useState } from "react"
import "./App.css"

function App() {

  const [imageId, setImageId] = useState<string | null>(null)

  const cloudName = "davuwvqgd"
  const uploadPreset = "clipmint_upload"

  const openUpload = () => {

    const widget = (window as any).cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset
      },
      (error: any, result: any) => {

        if (!error && result.event === "success") {
          setImageId(result.info.public_id)
        }

      }
    )

    widget.open()

  }

  const getUrl = (transform:string="") =>
    `https://res.cloudinary.com/${cloudName}/image/upload/${transform}/${imageId}.jpg`

  return (
    <div className="app">

      <section className="hero">

        <h1>Cloudinary AI Media Studio</h1>

        <p>
          Upload one image and generate marketing media automatically.
        </p>

        <button className="primary" onClick={openUpload}>
          Upload Image
        </button>

      </section>

      {imageId && (

        <div className="results">

          <h2>Original Image</h2>

          <img
            src={getUrl("f_auto,q_auto")}
            className="preview"
          />

          {/* AI BACKGROUND REMOVAL */}
          <h2>AI Background Removal</h2>

          <div className="grid">

            <div className="card">

              <img
                src={`https://res.cloudinary.com/${cloudName}/image/upload/e_background_removal,f_auto,q_auto/${imageId}.png`}
              />

              <a
                href={`https://res.cloudinary.com/${cloudName}/image/upload/e_background_removal,fl_attachment/${imageId}.png`}
              >
                Download
              </a>

            </div>

          </div>

          {/* SOCIAL MEDIA */}
          <h2>Auto Social Media Images</h2>

          <div className="grid">

            <div className="card">

              <h3>Instagram</h3>

              <img
                src={getUrl("c_pad,w_1080,h_1080,b_auto,f_auto,q_auto")}
              />

              <a
                href={getUrl("c_pad,w_1080,h_1080,b_auto,fl_attachment")}
              >
                Download
              </a>

            </div>

            <div className="card">

              <h3>TikTok</h3>

              <img
                src={getUrl("c_pad,w_1080,h_1920,b_auto,f_auto,q_auto")}
              />

              <a
                href={getUrl("c_pad,w_1080,h_1920,b_auto,fl_attachment")}
              >
                Download
              </a>

            </div>

            <div className="card">

              <h3>YouTube</h3>

              <img
                src={getUrl("c_pad,w_1280,h_720,b_auto,f_auto,q_auto")}
              />

              <a
                href={getUrl("c_pad,w_1280,h_720,b_auto,fl_attachment")}
              >
                Download
              </a>

            </div>

          </div>

          {/* MARKETING PACK */}

          <h2>Auto Marketing Pack</h2>

          <div className="grid">

            <div className="card">

              <h3>Website Banner</h3>

              <img
                src={getUrl("c_pad,w_1500,h_500,b_auto,f_auto,q_auto")}
              />

              <a
                href={getUrl("c_pad,w_1500,h_500,b_auto,fl_attachment")}
              >
                Download
              </a>

            </div>

            <div className="card">

              <h3>Square Ad</h3>

              <img
                src={getUrl("c_pad,w_1000,h_1000,b_auto,f_auto,q_auto")}
              />

              <a
                href={getUrl("c_pad,w_1000,h_1000,b_auto,fl_attachment")}
              >
                Download
              </a>

            </div>

            <div className="card">

              <h3>Story Format</h3>

              <img
                src={getUrl("c_pad,w_1080,h_1920,b_auto,f_auto,q_auto")}
              />

              <a
                href={getUrl("c_pad,w_1080,h_1920,b_auto,fl_attachment")}
              >
                Download
              </a>

            </div>

          </div>

        </div>

      )}

    </div>
  )
}

export default App