import SongBar from './SongBar'

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => {

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related Song:</h1>
      <div className="mt-6 w-full flex flex-col">
        {data?.map((song, i) => (
          <SongBar
            song={song}
            key={
              artistId ? `${song?.id}-${artistId}` : `${song?.key}-${artistId}`
            }
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedSongs
