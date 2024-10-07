import React from 'react';
import { motion } from 'framer-motion';

function Photos() {
  return (
    <div>
      {/* Section 1 */}
      <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-gray-50">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-1 flex-col gap-2">
            <motion.div
              className="flex flex-1 flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* img_01 */}
              <img
                className="object-cover h-full"
                src="https://images.unsplash.com/photo-1665689285334-b0044b6d2dc7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY0NjAxMTY&ixlib=rb-4.0.3&q=80"
                alt="img_01"
              />
            </motion.div>
            <motion.div
              className="hidden md:flex flex-1 flex-row gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex flex-1 flex-col">
                {/* img_02 */}
                <img
                  className="object-cover h-full"
                  src="https://images.unsplash.com/photo-1666433723497-38d1d053185b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEwNDU&ixlib=rb-4.0.3&q=80"
                  alt="img_02"
                />
              </div>
              <div className="hidden md:flex flex-1 flex-col">
                {/* img_03 */}
                <img
                  className="object-cover h-full"
                  src="https://images.unsplash.com/photo-1665048110211-91d0b74c421c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY0NjAxMTY&ixlib=rb-4.0.3&q=80"
                  alt="img_03"
                />
              </div>
            </motion.div>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <motion.div
              className="hidden md:flex flex-1 flex-row gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="flex flex-1 flex-col">
                {/* img_04 */}
                <img
                  className="object-cover h-full"
                  src="https://images.unsplash.com/photo-1666297599033-09b318f2c8b5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDExMjk&ixlib=rb-4.0.3&q=80"
                  alt="img_04"
                />
              </div>
              <div className="hidden md:flex flex-1 flex-col">
                {/* img_05 */}
                <img
                  className="object-cover h-full"
                  src="https://images.unsplash.com/photo-1664713815297-9ce06950c022?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80"
                  alt="img_05"
                />
              </div>
            </motion.div>
            <motion.div
              className="flex flex-1 flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {/* img_06 */}
              <img
                className="object-cover h-full"
                src="https://images.unsplash.com/photo-1666060519824-796d5638d809?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDExOTQ&ixlib=rb-4.0.3&q=80"
                alt="img_06"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-white">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-1 flex-col">
            <motion.div
              className="flex flex-1 flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {/* img_01 */}
              <img
                className="object-cover h-full"
                src="https://images.unsplash.com/photo-1664764119004-999a3f80a1b8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80"
                alt="img_07"
              />
            </motion.div>
          </div>
          <div className="flex flex-1">
            <motion.div
              className="grid grid-cols-2 gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div>
                {/* img_02 */}
                <img
                  className="object-cover h-full"
                  src="https://images.unsplash.com/photo-1666147775717-65fa1fe0c47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400"
                  alt="img_08"
                />
              </div>
              <div>
                {/* img_03 */}
                <img
                  className="object-cover h-full"
                  src="https://images.unsplash.com/photo-1665561741359-7af2d2fdc395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400"
                  alt="img_09"
                />
              </div>
              <div>
                {/* img_04 */}
                <img
                  className="object-cover h-full"
                  src="https://images.unsplash.com/photo-1665391837905-74d250172dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400"
                  alt="img_10"
                />
              </div>
              <div>
                {/* img_05 */}
                <img
                  className="object-cover h-full"
                  src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="img_11"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photos;
