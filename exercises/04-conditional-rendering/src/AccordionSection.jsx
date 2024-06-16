export default function Accordion({ isOpen, title, paragraph }) {
  let [titleClass, transitionClass, contentClass] =
    isOpen === true
      ? [
          { titleClass: 'title active' },
          { transitionClass: 'transition visible' },
          { contentClass: 'content active' },
        ]
      : [
          { titleClass: 'title' },
          { transitionClass: 'transition hidden' },
          { contentClass: 'content' },
        ]

  return (
    <>
      <div className={titleClass}>
        <i className='dropdown icon'></i>
        {title}
      </div>
      <div className={contentClass}>
        <p className={transitionClass}>{paragraph}</p>
      </div>
    </>
  )
}
