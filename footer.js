
class MainFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            padding: 2rem 9%;
            background: var(--secondary-bg-color);
        }

        .footer-text p {
            font-size: 1.6rem;
        }

        .footer-iconTop a {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: .8rem;
            background: var(--main-color);
            border-radius: .8rem;
            transition: .5s ease;
        }

        .footer-iconTop a:hover {
            box-shadow: 0 0 1rem var(--main-color);
        }

        .footer-iconTop a i {
            font-size: 2.4rem;
            color: var(--secondary-bg-color);
        }
      </style>
      <footer class="footer">
          <div class="footer-text">
              <p>Copyright &copy; 2025 by Kwini | All Rights Reserved.</p>
          </div>

          <div class="footer-iconTop">
              <a href="#"><i class='bx bx-up-arrow-alt'></i></a>
          </div>
      </footer>
    `;
  }
}

customElements.define('main-footer', MainFooter);
