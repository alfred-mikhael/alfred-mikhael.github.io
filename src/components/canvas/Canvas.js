  import React, { useRef, useEffect } from 'react'
  
  const PROBABILITY = 0.20;

  const Canvas = props => {
    
    const { draw, graph, ...rest } = props
    const canvasRef = useRef(null)
    
    useEffect(() => {
      
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 80 / 100
      let frameCount = 0
      let animationFrameId
      
      const render = () => {
        frameCount++
        if (frameCount > 500) {
            graph.generateEdges(PROBABILITY)
            frameCount = 0
        }
        draw(context, graph)
        animationFrameId = window.requestAnimationFrame(render)
      }
      render()
      
      return () => {
        window.cancelAnimationFrame(animationFrameId)
      }
    }, [draw, graph])
    
    return <canvas style={{background: "#002642"}}ref={canvasRef} {...rest}/>
  }
  
  export default Canvas


// import React, { useRef, useEffect } from 'react';

// const Canvas = props => {
  
//   const { draw, graph, ...rest } = props;
//   const canvasRef = useRef(null);
  
//   useEffect(() => {
    
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     let frameCount = 0;
//     let animationFrameId;
    
//     const render = () => {
//       frameCount++;

//       if (frameCount % 100 === 0) {
//         graph.generateEdges(Math.random())
//       }

//       draw(context, frameCount)
//       animationFrameId = window.requestAnimationFrame(render)
//     }
//     render()
    
//     return () => {
//       window.cancelAnimationFrame(animationFrameId)
//     }
//   }, [draw, graph])
  
//   return <canvas ref={canvasRef} {...rest}/>
// }

// export default Canvas;