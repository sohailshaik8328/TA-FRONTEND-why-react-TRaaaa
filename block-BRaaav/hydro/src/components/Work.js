function Work(params) {
    return (
        <section class="work padding">
        <div class="container">
          <header class="sec-header text-center">
            <h2 class="heading">Our Work</h2>
            <div class="dot-wrapper">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </header>
          <div class="flex">
            <div class="flex-23">
              <img
                class="flexible-img"
                src="/media/work-image1.jpg"
                alt="Work Image 1"
              />
            </div>
            <div class="flex-23">
              <img
                class="flexible-img"
                src="/media/work-image2.jpg"
                alt="Work Image 1"
              />
            </div>
            <div class="flex-23">
              <img
                class="flexible-img"
                src="/media/work-image3.jpg"
                alt="Work Image 1"
              />
            </div>
            <div class="flex-23">
              <img
                class="flexible-img"
                src="/media/work-image4.jpg"
                alt="Work Image 1"
              />
            </div>
          </div>
        </div>
      </section>

    )
}
export default Work;