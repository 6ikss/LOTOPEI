// Fond atmosphérique : halos braise volcanique qui dérivent + grille technique + grain.
export default function Atmosphere() {
  return (
    <>
      <div className="atmosphere" aria-hidden="true">
        <span className="atmosphere__glow atmosphere__glow--1" />
        <span className="atmosphere__glow atmosphere__glow--2" />
        <span className="atmosphere__glow atmosphere__glow--3" />
        <span className="atmosphere__grid" />
      </div>
      <div className="grain" aria-hidden="true" />
    </>
  )
}
