export default function Accordion({ isOpen, title, paragraph }) {
  const [titleClassObj, transitionClassObj, contentClassObj] =
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
      <div className={titleClassObj.titleClass}>
        <i className='dropdown icon'></i>
        {title}
      </div>
      <div className={contentClassObj.contentClass}>
        <p className={transitionClassObj.transitionClass}>{paragraph}</p>
      </div>
    </>
  )
}
