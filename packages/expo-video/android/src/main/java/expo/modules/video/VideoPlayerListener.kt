package expo.modules.video

import androidx.annotation.OptIn
import androidx.media3.common.util.UnstableApi
import com.facebook.react.common.annotations.UnstableReactNativeAPI
import expo.modules.video.enums.PlayerStatus
import expo.modules.video.records.PlaybackError
import expo.modules.video.records.VideoSource
import expo.modules.video.records.VolumeEvent

@UnstableReactNativeAPI
@OptIn(UnstableApi::class)
interface VideoPlayerListener {
  fun onStatusChanged(player: VideoPlayer, status: PlayerStatus, oldStatus: PlayerStatus?, error: PlaybackError?) {}
  fun onIsPlayingChanged(player: VideoPlayer, isPlaying: Boolean, oldIsPlaying: Boolean?) {}
  fun onVolumeChanged(player: VideoPlayer, newValue: VolumeEvent, oldVolume: VolumeEvent?) {}
  fun onSourceChanged(player: VideoPlayer, source: VideoSource?, oldSource: VideoSource?) {}
  fun onPlaybackRateChanged(player: VideoPlayer, rate: Float, oldRate: Float?) {}
  fun onPlayedToEnd(player: VideoPlayer) {}
}
