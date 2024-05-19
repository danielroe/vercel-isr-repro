
# 🚧 Repository update 🚧

This repository has been archived. Please feel free to [contact me directly](https://github.com/danielroe) if you have any questions.

<hr>
## Steps to reproduce

1. Deploy this project as is.
2. Make a request to the index.

   All requests end up being prerendered, even ones that are not prefixed with `/blog/`.

3. Update `build` command to refer to `output-2`. The only difference is the name of the prerender function.

4. Make a request to `/blog/something`

   No requests are now prerendered.
